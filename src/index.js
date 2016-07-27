import React from 'react'
import ReactDOM from 'react-dom'
  
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'

import { inboxApp } from './reducers/app'
import App from './container/App'

const loggerMiddleware = createLogger()

let store = createStore(
  inboxApp, 
  applyMiddleware(
    thunkMiddleware, //To dispatch async actions
    loggerMiddleware //Log actions
  )
)

import { fetchConversations } from './actions'

window.store = store
window.fetchConversations = fetchConversations

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
