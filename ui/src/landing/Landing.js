import React, { Component } from 'react'
import Logo_MakeWish from './Logo_MakeWish.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img src={Logo_MakeWish} width= "20%" height= "auto" class = "img-responsive" alt=""></img>
          </a>
          <a href = '/login'><p>Login/Register here</p></a>
        </nav>
      </div>
    )
  }
}