import React, { Component } from 'react'
import Logo_MakeWish from '../images/Logo_MakeWish.png'
import Logo_MakeWish_Dark_Blue from '../images/Logo_MakeWish_Dark_Blue.png'
import Logo_Galaxy_Colour from '../images/Logo_Galaxy_Colour.png'

export default class Landing extends Component {
  render() {
    return (
        <div>
          <div class = "container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top" id="mainNav" padding = "400">
        <img src="Logo_MakeWish.png" width= "12%" height= "auto" class = "img-responsive" alt=""></img>
        <img src="Logo_Galaxy_Colour.png" width= "12%" height= "auto" class = "img-responsive" alt=""></img>
<ul class="navbar-nav ml-auto">
                   <li class="nav-item">
                     <a class="btn btn-primary" href="/login" role="button">Login/Register</a>
                   </li>
                 </ul>
    </nav></div>
<div class = "container">
<div class = "row">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={Logo_Galaxy_Colour} alt="First slide"></img>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Logo_MakeWish} alt="Second slide"></img>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={Logo_MakeWish_Dark_Blue} alt="Third slide"></img>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
        </div>
        </div>
    )
  }
}