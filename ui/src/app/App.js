import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Login from '../login/Login'
import Dashboard from '../dashboard/Dashboard'
import Landing from '../landing/Landing'
import WatchAuth from '../auth/WatchAuth'
import NotFound from '../common/NotFound'
import CreateWish from './wish/CreateWish'
import PostCreate from './wish/PostCreate'
import DetailedChild from '../child/DetailedChild'
import Admin from '../dashboard/Admin'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
        <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard/admin" component={Admin} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/detailedChild" component={DetailedChild} />
          <Route exact path="/createWish" component={CreateWish} />
          <Route exact path="/postWish" component={PostCreate} />
          <Route exact path="/" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found"> </Redirect>
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
