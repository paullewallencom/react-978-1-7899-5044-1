import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    // routerMiddleware is used for dispatching history actions
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );
  return store;
}
