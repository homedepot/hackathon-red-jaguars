import React from 'react';
import { withRouter } from 'react-router-dom'
//import Beemo from './beemo.jpg'
//import HomeDepot from './homedepot.jpg'
//import BigPic from './bigpic.jpg'
//import BigPic2 from './bigpic2.jpg'
//import ShortVid from './shortvid.mp4'
//import Alien_Icon from '../images/Alien_Icon.png'
//import Astronaut_Icon from '../images/Astronaut_Icon.png'
//import Rocket_Icon from '../images/Rocket_Icon.png'
//import Telescope_Icon from '../images/Telescope_Icon.png'

const DetailedChild = (props)=>{
    const wish= props.location.state.wish;
    const role = props.location.state.role;
    //const role = "manager";
    const goBack = (e) => {
        e.preventDefault();
        this.props.history.push("/dashboard"); //Warning: does not work
    }
    const onhandleChange = (e) => {
        this.setState ({
          photo: URL.createObjectURL(e.target.files[0])
        })
    }
    /*const onAudioUpload = (e) => {
        this.setState ({
          audio: URL.createObjectURL(e.target.files[0])
        })
    }*/
    const resetFile = e => {
        e.target.value = null;
    };
    
    /*const handleFormFieldChange = (key, { target: { value } }) => {
        this.setState({ [key]: value })
    }*/
    // const getChild = () => {
    //     const {match} = props
    //     const id = match.location.state.id
    //     axios.get(`${expressDomain}/wish/findOneById/${id}`).then(res => {
    //         setState({wish: res.data});
    //         props.history.push("/detailedChild",{id: res.data.id})
    //     })
    // }
        console.log(wish)
        console.log("role",role)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div align="center">
                            <button type="button" className="btn btn-primary btn-large btn-block"  onClick={goBack}>Go Back To Dashboard</button>

                            </div>
                        </div>
                        <div className="col-5">
                            <div className="card" align="center">
                                <div className="card-body">
                                <h5 className="card-tite">Date Wished</h5> {wish.wishDate}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h1></h1>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                {/*<img src={Beemo} className="img-fluid rounded-circle" alt="..."></img>*/}
                                <div className="card-body">
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
                                    {/*<img src={Beemo} className="img-fluid rounded-circle" alt="..."></img>*/}

                                    <h5 className="card-title">Child's Picture</h5>
                                </div>
                            </div>
                            <div className="card">
                                {/*<img src={wish.wishType==="GO Somewhere!" ? {Rocket_Icon} : wish.wishType==="MEET Someone!" ? {Alien_Icon} : wish.wishType==="BE Someone!" ? {Astronaut_Icon} : {Telescope_Icon}} className="img-fluid rounded-circle" alt="..."></img>*/}
                                <div className="card-body">
                                    {/*<img src={Beemo} className="img-fluid rounded-circle" alt="..."></img>*/}

                                    <h5 className="card-title">Type of Wish</h5> {wish.wishType}
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Name</h5> {wish.firstName}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Age</h5> {wish.age}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Gender</h5> {wish.gender}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Hometown</h5> {wish.homeTown}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Illness Summary</h5> {wish.illness}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Wish Details</h5> {wish.wishDetail}
                                </div> 
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Sponsor Logo</h5>
                                    {/*<img src={HomeDepot} className="img-fluid" alt="..."></img>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Sponsor ID</h5> {wish.orgId}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h1>{/*empty*/}</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div align="center">
                            <h1>Additional Info</h1>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Picture</h5>    
                                    {/*<img src={BigPic2} className="card-img-top" alt="..."></img>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
                                </div>
                            </div>
                        </div> 
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Picture</h5>
                                    {/*img src={BigPic} className="img-fluid" alt="..."></img>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
                                </div>
                            </div>
                        </div> 
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Video</h5>
                                    {/*<div align="center" className="embed-responsive embed-responsive-16by9">
                                        <video className="embed-responsive-item">
                                            <source src={ShortVid} type="video/mp4"></source>
                                        </video>
                                    </div>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
                                </div>
                            </div>
                        </div>  
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Audio</h5>
                                    {/*<img src="..." className="img-fluid" alt="..."></img>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
                                    
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="row">
                        <h1></h1>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col">
                            <div className="text-right">
                                <button type="button" className="btn btn-primary btn-large">Save Changes</button> {/*Button does not do anything atm*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}
 
export default withRouter(DetailedChild)