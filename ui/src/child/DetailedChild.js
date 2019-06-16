import React from 'react';
import { withRouter } from 'react-router-dom'
import Beemo from './beemo.jpg'
import HomeDepot from './homedepot.jpg'
import BigPic from './bigpic.jpg'
import BigPic2 from './bigpic2.jpg'
import ShortVid from './shortvid.mp4'
import Wish from '../images/Alien_Icon.png'

const DetailedChild = (props)=>{
    const wish= props.location.state.wish;
    const role = props.location.state.role;

    const goBack = (e) => {
        e.preventDefault();
        this.props.history.push("/dashboard");
    }
    const onhandleChange = (e) => {
        this.setState ({
          photo: URL.createObjectURL(e.target.files[0])
        })
    }
    const onAudioUpload = (e) => {
        this.setState ({
          audio: URL.createObjectURL(e.target.files[0])
        })
      }
    const resetFile = e => {
        e.target.value = null;
    };
    const handleFormFieldChange = (key, { target: { value } }) => {
        this.setState({ [key]: value })
      }
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
                <button className="fancyButtons"  onClick={goBack}>Go Back To Dashboard</button>
                <div className="row">
                    <div className="col">
                    <div className="container">
                        <div className="card">
                            <img src={Beemo} className="img-fluid rounded-circle" alt="..."></img>
                            <div className="card-body">
                            <input className="inputFile" id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
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
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={HomeDepot} className="img-fluid" alt="..."></img>
                                <input className="inputFile" id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
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
                    <div className="col-lg">
                        <div className="card">
                            <div className="card-body">
                                <img src={BigPic2} className="card-img-top" alt="..."></img>
                                <input className="inputFile" id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg">
                        <div className="card">
                            <div className="card-body">
                                <img src={BigPic} className="img-fluid" alt="..."></img>
                                <input className="inputFile" id="file" type="file" onChange={onhandleChange} onClick={resetFile}/>
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
                                <a href="#" class="btn btn-primary">Upload Video</a>
                            </div>
                        </div>
                    </div>  
                    <div className="col-lg">
                        <div className="card">
                            <div className="card-body">
                                {/*<img src="..." className="img-fluid" alt="..."></img>*/}
                                <label class="btn btn-primary" for="my-file-selector">
                                <input id="my-file-selector" type="file" class="d-none" onChange={onAudioUpload} onClick={resetFile}/>
                                    Button Text Here
                                </label>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )

}
 
export default withRouter(DetailedChild)