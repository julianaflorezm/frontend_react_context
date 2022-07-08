import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LandingPage } from 'pages/Landing';
import { BankMenuPage } from 'pages/BankMenu';
import { SessionContext } from 'context/SessionContext';
import { ConditionalRoute } from 'components/ConditionalRoute';

const App: React.FC = () => {
  const {
    data: { sessionId },
  } = useContext(SessionContext);
  return (
    <Router>
      <Switch>
        <ConditionalRoute
          path="/mi-banco"
          canActivate={sessionId !== undefined}
          redirectTo="/"
          component={BankMenuPage}
        />
        <ConditionalRoute
          path="/"
          canActivate={sessionId === undefined}
          redirectTo="/mi-banco"
          component={LandingPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
