import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login/Login'
import Landing from '../landing/Landing'
import WatchAuth from '../auth/WatchAuth'
import ChildList from '../dashboard/childList'
import Dashboard from '../dashboard/Dashboard';

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
