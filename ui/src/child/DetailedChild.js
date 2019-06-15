import React, { Component } from 'react';
import axios from 'axios'
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

    getChild = (e) => {
        e.preventDefault();
        var obj
        const {match} = this.props
        const id = match.params.id
        axios
        .get(`${this.expressDomain}/wish/findOneById/${id}`)
        .then(response => {
            this.props.history.push("/detailedChild",{id: response.data.id})
        })
    }

    render() {
        return (
            <div>
                <button className="fancyButtons"  onClick={this.goBack}>Go Back To Dashboard</button>
                <div className="row">
                    <div className="col">
                    <div className="container">
                        <div className="card">
                            <img src={Beemo} className="img-fluid rounded-circle" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">User Photo</h5>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                            <img src={Wish} className="img-fluid" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Type of Wish</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Name</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Age</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Hometown</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Illness Summary</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Wish Details</h5>
                            </div> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                            <img src={HomeDepot} className="img-fluid" alt="..."></img>
                                <h5 className="card-title">Sponsor Photo</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sponsor ID</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-lg">
                            <div className="card">
                                <div className="card-body">
                                    <img src={BigPic2} className="card-img-top" alt="..."></img>
                                    <h5 className="card-title">Pic</h5>
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg">
                            <div className="card">
                                <div className="card-body">
                                    <img src={BigPic} className="img-fluid" alt="..."></img>
                                    <h5 className="card-title">Pic</h5>
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg">
                            <div className="card">
                                <div className="card-body">
                                    <div align="center" className="embed-responsive embed-responsive-16by9">
                                        <video className="embed-responsive-item">
                                            <source src={ShortVid} type="video/mp4"></source>
                                        </video>
                                    </div>
                                    <h5 className="card-title">Play Video</h5>
                                </div>
                            </div>
                        </div>  
                        <div className="col-lg">
                            <div className="card">
                                <div className="card-body">
                                    <img src="..." className="card-img-top" alt="..."></img>
                                    <h5 className="card-title">Play Sound</h5>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
        )

    }
}
 
export default withRouter(DetailedChild)