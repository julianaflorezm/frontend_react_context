import { v4 as uuidv4 } from 'uuid';
import { SessionState } from 'context/models/SessionState';

const SESSION_IDENTIFIER = 'SESSION_ID';
const SESSION_SEPARATOR = ':::';

export const createSession = (username?: string, userId?: number): string => {
  const sessionId = `${uuidv4()}${SESSION_SEPARATOR}${username}${SESSION_SEPARATOR}${userId}${SESSION_SEPARATOR}${Date.now()}`;
  localStorage.setItem(SESSION_IDENTIFIER, sessionId);
  return sessionId;
};

export const recoverSession = (): SessionState => {
  const sessionId = localStorage.getItem(SESSION_IDENTIFIER);
  if (!sessionId) {
    return {};
  }
  const userId = parseFloat(sessionId.split(SESSION_SEPARATOR)[2]);
  return {
    sessionId,
    username: sessionId.split(SESSION_SEPARATOR)[1],
    userId,
  };
};
