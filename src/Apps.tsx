import React from 'react'
// import './App.css'
import { Route, Switch } from 'react-router'
import App from './App'
import { Paths } from './components/helpers/routerHelper'

function Apps() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path={Paths.HOME} component={App} />
      </Switch>
    </div>
  )
}
export default Apps
