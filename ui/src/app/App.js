import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login/Login'
import Dashboard from '../dashboard/Dashboard'
import Landing from '../landing/Landing'
import WatchAuth from '../auth/WatchAuth'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
