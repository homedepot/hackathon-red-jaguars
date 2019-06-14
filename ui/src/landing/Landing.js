import React, { Component } from 'react'
import Logo_MakeWish from '../img/Logo_MakeWish.png'
import Logo_MakeWish_Dark_Blue from '../img/Logo_MakeWish_Dark_Blue.png'
import Logo_Galaxy_Colour from '../img/Logo_Galaxy_Colour.png'

export default class Landing extends Component {
  render() {
    return (
        <div>
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top" id="mainNav">
                  <img src={Logo_MakeWish} width= "17%" height= "auto" class = "img-responsive" alt=""></img>
                  <img src={Logo_Galaxy_Colour} width= "17%" height= "auto" class = "img-responsive" alt=""></img>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i class="fas fa-bars"></i>
                </button>
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="btn btn-primary" href="/login" role="button">Login/Register</a>
                    </li>
                  </ul>
            </nav>
          </div>

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
    )
  }
}