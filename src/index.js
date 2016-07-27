import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
//
//console.log('aaaa')
//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//);

//
import App from './container/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { todoApp } from './reducers/app'

//logger middleware
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result 
}

let store = createStore(
  todoApp, 
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)