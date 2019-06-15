import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Beemo from './beemo.jpg'
import HomeDepot from './homedepot.jpg'
import BigPic from './bigpic.jpg'
import BigPic2 from './bigpic2.jpg'
import ShortVid from './shortvid.mp4'
import Wish from '../images/Alien_Icon.png'

class DetailedChild extends Component {
    constructor(props) {
        super(props)

        this.expressDomain = process.env.REACT_APP_expressDomain || 'http://localhost:3002'
    }
    goBack = (e) => {
        e.preventDefault();
        this.props.history.push("/dashboard");
    }
    render() {
        //const {match} = this.props
        //const id = match.params.id
        return (
            <div>
                <td className="sameLine"><button className="fancyButtons"  onClick={this.goBack}>Go Back To Dashboard</button></td>
                <div class="row">
                    <div class="col">
                    <div class="container">
                        <div class="card">
                            <img src={Beemo} class="img-fluid rounded-circle" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">User Photo</h5>
                            </div>
                        </div>
                        </div>
                        <div class="card">
                            <img src={Wish} class="img-fluid" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Type of Wish</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Name</h5>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Age</h5>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Hometown</h5>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Illness Summary</h5>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Wish Details</h5>
                            </div> 
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                            <img src={HomeDepot} class="img-fluid" alt="..."></img>
                                <h5 class="card-title">Sponsor Photo</h5>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Sponsor ID</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <img src={BigPic2} class="card-img-top" alt="..."></img>
                                    <h5 class="card-title">Pic</h5>
                                </div>
                            </div>
                        </div> 
                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <img src={BigPic} class="img-fluid" alt="..."></img>
                                    <h5 class="card-title">Pic</h5>
                                </div>
                            </div>
                        </div> 
                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <div align="center" class="embed-responsive embed-responsive-16by9">
                                        <video autoplay loop class="embed-responsive-item">
                                            <source src={ShortVid} type="video/mp4"></source>
                                        </video>
                                    </div>
                                    <h5 class="card-title">Play Video</h5>
                                </div>
                            </div>
                        </div>  
                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <img src="..." class="card-img-top" alt="..."></img>
                                    <h5 class="card-title">Play Sound</h5>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
        )

    }
}
 
export default withRouter(DetailedChild)