import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store, history } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
// import Test from './Tests'
import { ConnectedRouter } from 'connected-react-router'
import Apps from './Apps'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Apps />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
