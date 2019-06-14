import React, { Component } from 'react'
import logo from '../images/MakeAWishLogo.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Hackathon Landing Page</h1>
        <img src={logo} alt="Logo" width="100px" height="25px"/>
        <button title="Log In/Register" class="button primary"><a href = '/login'>Log In/Register Button</a></button>
      </div>
    )
  }
}
