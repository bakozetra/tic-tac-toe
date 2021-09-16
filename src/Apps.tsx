import React from 'react'
// import './App.css'
import { Route, Switch } from 'react-router'
import App from './App'

function Apps() {
  return (
    <div className='App'>
      <Switch>
        <Route component={App} />
      </Switch>
    </div>
  )
}
export default Apps
