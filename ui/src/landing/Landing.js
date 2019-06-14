import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
            Bootstrap
          </a>
          <a href = '/login'><p>Login/Register here</p></a>
        </nav>
      </div>
    )
  }
}