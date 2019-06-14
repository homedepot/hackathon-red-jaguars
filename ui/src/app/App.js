import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Login from '../login/Login'
import Landing from '../landing/Landing'
import WatchAuth from '../auth/WatchAuth'
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../common/NotFound';
import CreateWish from './wish/CreateWish'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/createWish" component={CreateWish} />
          <Route exact path="/" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found"> </Redirect>
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
