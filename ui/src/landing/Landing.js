import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div class = "container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top" id="mainNav" padding = "400">
            <img src="MakeAWishLogo.png" width= "12%" height= "auto" class = "img-responsive" alt=""></img>
            <img src="Galaxy_Color.png" width= "12%" height= "auto" class = "img-responsive" alt=""></img>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="btn btn-primary" href="/login" role="button">Login/Register</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class = "container">
          <div class = "row">
            <div class = "col-9">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="Galaxy_Color.png" alt="First slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="Galaxy.png" alt="Second slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="MakeAWishLogo.png" alt="Third slide"></img>
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
              <div class="card">
              <img class="card-top" src="..." alt="Card cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <img class="card-top" src="..." alt="Card cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <img class="card-top" src="..." alt="Card cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
            <div class = "col-3">
            <div class="card">
              <img class="card-top" src="..." alt="Card cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <img class="card-top" src="..." alt="Card cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <img class="card-top" src="..." alt="Card cap"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}