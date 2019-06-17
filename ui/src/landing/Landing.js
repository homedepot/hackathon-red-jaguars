import React, { Component } from 'react'
import BigPic from './bigpic.jpg'
import HomeDepot from './homedepot.jpg'

export default class Landing extends Component {
  render () {
    return (
      <div>
        <div className = "container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top" id="mainNav" padding = "400">
            <img src="images/MakeAWishLogo.png" width= "12%" height= "auto" className = "img-responsive" alt=""></img>
            <img src="images/Galaxy_Color.png" width= "12%" height= "auto" className = "img-responsive" alt=""></img>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="btn btn-primary" href="/login" role="button">Login/Register</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className = "container">
          <div className = "row">
            <div className = "col-9">
              <div className = "card">
                <div className= "card-body">
                <h1 className = "card-title">Celebrations</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="images/Galaxy_Color.png" height="300" width="200" alt="First slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="images/Galaxy.png" height="300" width="200" alt="Second slide"></img>
                    <div className="text-center">
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="images/MakeAWishLogo.png" height="300" width="200" alt="Third slide"></img>
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
              </div>
              </div>
              <div>
                <h1>{/*empty*/}</h1>
              </div>
              <div className="card">
              <div className="card-body">
                <h1 className="card-title">Volunteer Opportunities</h1>

                <img className="card-top" src={BigPic} height="300" width="780" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more information</a>
              </div>
                <div className="card-body">
                <img className="card-top" src={BigPic} height="300" width="780" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more information</a>
              </div>
              <div className="card-body">
              <img className="card-top" src={BigPic} height="300" width="780" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more information</a>
              </div>
            </div>
            </div>
            <div className = "col-3">
            <div className="text-center">
            <div className="card">
              <div className="card-body">
              <h1 className="card-title">Sponsors</h1>
                <img className="card-top" src={HomeDepot} height="200" width="200" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more</a>
              </div>
              <div className="card-body">
                <img className="card-top" src={HomeDepot} height="200" width="200" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more</a>
              </div>
              <div className="card-body">
                <img className="card-top" src={HomeDepot} height="200" width="200" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}