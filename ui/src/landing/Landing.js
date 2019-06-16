import React, { Component } from 'react'
import BigPic from './bigpic.jpg'
import HomeDepot from './homedepot.jpg'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <body>
        <div class = "container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top" id="mainNav" padding = "400">
            <img src="images/MakeAWishLogo.png" width= "12%" height= "auto" className = "img-responsive" alt=""></img>
            <img src="images/Galaxy_Color.png" width= "12%" height= "auto" className = "img-responsive" alt=""></img>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="btn btn-primary" href="/login" role="button">Login/Register</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class = "container">
          <div class = "row">
            <div class = "col-9">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="images/Galaxy_Color.png" height="300" width="200" alt="First slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="images/Galaxy.png" height="300" width="200" alt="Second slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="images/MakeAWishLogo.png" height="300" width="200" alt="Third slide"></img>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="card">
              <div class="card-body">
                <h1 className="card-title">Celebrations</h1>

                <img class="card-top" src={BigPic} height="300" width="780" alt="Card cap"></img>
                <a href="/" class="btn btn-primary">Learn more information</a>
              </div>
                <div class="card-body">
                <img class="card-top" src={BigPic} height="300" width="780" alt="Card cap"></img>
                <a href="/" class="btn btn-primary">Learn more information</a>
              </div>
              <div class="card-body">
              <img class="card-top" src={BigPic} height="300" width="780" alt="Card cap"></img>
                <a href="/" class="btn btn-primary">Learn more information</a>
              </div>
            </div>
            </div>
            <div class = "col-3">
            <div className="text-center">
            <div className="card">
              <div class="card-body">
              <h1 className="card-title">Sponsors</h1>
                <img class="card-top" src={HomeDepot} height="200" width="200" alt="Card cap"></img>
                <a href="/" class="btn btn-primary">Learn more</a>
              </div>
              <div class="card-body">
                <img class="card-top" src={HomeDepot} height="200" width="200" alt="Card cap"></img>
                <a href="/" class="btn btn-primary">Learn more</a>
              </div>
              <div class="card-body">
                <img class="card-top" src={HomeDepot} height="200" width="200" alt="Card cap"></img>
                <a href="/" class="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        </body>
      </div>
    )
  }
}