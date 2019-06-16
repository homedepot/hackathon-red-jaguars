import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div>
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
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="images/Galaxy_Color.png" alt="First slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="images/Galaxy.png" alt="Second slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="images/MakeAWishLogo.png" alt="Third slide"></img>
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
              <img className="card-top" src="..." alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img className="card-top" src="..." alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img className="card-top" src="..." alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
            <div className = "col-3">
            <div className="card">
              <img className="card-top" src="..." alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img className="card-top" src="..." alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img className="card-top" src="..." alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}