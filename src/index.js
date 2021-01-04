import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import userReducer from './reducers/userReducer'
import bebeReducer from './reducers/bebeReducer'
import dayReducer from './reducers/dayReducer'
import trackingReducer from './reducers/trackingReducer'

const rootReducer = combineReducers({
  user: userReducer,
  bebes: bebeReducer,
  days: dayReducer,
  trackings: trackingReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
