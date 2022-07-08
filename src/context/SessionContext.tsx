import React, { createContext, useEffect, useRef, useState } from 'react';
import { SessionState } from 'context/models/SessionState';
import * as sessionService from '../services/sessionService';

export const useStateContainer = (initialState: SessionState = {}) => {
  const [username, setUsername] = useState(initialState.username);
  const [userId, setUserId] = useState(initialState.userId);
  const [sessionId, setSessionId] = useState(initialState.sessionId);
  const usernameRef = useRef(false);
  const userIdRef = useRef(false);

  useEffect(() => {
    if (!usernameRef.current && !userIdRef.current) {
      usernameRef.current = true;
      userIdRef.current = true;
      return;
    }
    if (!username && !userId) {
      return;
    }
    setSessionId(sessionService.createSession(username, userId));
  }, [username, userId]);

  return {
    data: { username, sessionId, userId },
    mutations: { setUsername, setUserId },
  };
};

export const SessionContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export const SessionProvider: React.FC = ({ children }) => {
  const contextValue = useStateContainer(sessionService.recoverSession());
  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
