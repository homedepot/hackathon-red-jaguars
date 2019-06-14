import React, { Component } from 'react'
import Logo_MakeWish from './Logo_MakeWish.png'
import Logo_Galaxy from './Galaxy.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img src={Logo_MakeWish} width= "20%" height= "auto" class = "img-responsive" alt=""></img>
            <img src={Logo_Galaxy} width= "20%" height= "auto" class = "img-responsive" alt=""></img>
          </a>
          <button type="button" class="btn btn-primary"><a href = "/login"><p class="text-white">Login/Register</p></a></button>       
        </nav>
      </div>
    )
  }
}