import React, { Component } from 'react'
import Logo_MakeWish from './Logo_MakeWish.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
          <div class="container">
            <div class="row">
              <div class = ".col-3">
                <img src={Logo_MakeWish} class="d-inline-block align-top" alt=""></img>
                </div>
                <div class = ".col-9"></div>
              </div>
            </div>
          </a>
          <a href = '/login'><p>Login/Register here</p></a>
        </nav>
      </div>
    )
  }
}