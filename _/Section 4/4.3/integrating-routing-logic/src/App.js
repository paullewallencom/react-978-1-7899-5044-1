import React from 'react';
import { routes } from './routes';
import { ConnectedRouter } from 'connected-react-router';

const App = ({ history }) => (
  <ConnectedRouter history={history}>{routes}</ConnectedRouter>
);
export default App;
