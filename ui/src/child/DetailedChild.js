import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import Beemo from './beemo.jpg'

import Axios from "axios";
//import HomeDepot from './homedepot.jpg'
//import BigPic from './bigpic.jpg'
//import BigPic2 from './bigpic2.jpg'
//import ShortVid from './shortvid.mp4'
import Alien_Icon from '../images/Alien_Icon.png'
import Astronaut_Icon from '../images/Astronaut_Icon.png'
import Rocket_Icon from '../images/Rocket_Icon.png'
import Telescope_Icon from '../images/Telescope_Icon.png'

const DetailedChild = (props)=>{
    const wish= props.location.state.wish;
    const role = props.location.state.role;

       const [orgId ,setOrgId] = useState("")
        const [ audio , setAudio]= useState("")
        const [ video ,setVideo]= useState("")
        const [ photo , setPhoto]= useState("")
    const[companyLogo, setCompanyLogo]=useState("")
    //const role = manager";


    const updateWish = () => {
        let url="http://localhost:3002/wish/update/" + wish._id;
        debugger;
        Axios.put(url, {
          firstName: wish.firstName,
          age: wish.age,
          homeTown: wish.homeTown,
          wishType: wish.wishType,
          wishDate: wish.wishDate,
          gender: wish.gender,
          illness: wish.illness,
          wishDetail: wish.wishDetail,
          userId: wish.userId,
          audio: audio,
          video: video,
          photo: photo,
          orgId: orgId,
          companyLogo:companyLogo
        })
          .then( () => {
              this.setState({
                wish: wish,
              })
            console.log(this.state.wish)
            this.props.history.push('/postWish');
            }
          )
          .catch(function(error) {
            console.log(error);
          });
      }

    const goBack = (e) => {
        e.preventDefault();
        props.history.push("/dashboard");
    }

    const resetFile = e => {
        e.target.value = null;
    };
    
        console.log(wish)
        console.log("role",role)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
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
                        <h1>{/*empty*/}</h1>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="text-center">
                                    <img src={Beemo} className="img-fluid rounded-circle shadow p-0 mb-5 bg-white rounded" alt="..."></img>
                                    <h5>Child's Picture</h5>
                                    <input className={role==="manager" ? "inputFile" : "hidden"} align="center" id="file" type="file" onChange={(x)=>setPhoto(x.currentTarget.value)} onClick={resetFile}/>
                            </div>
                            <div className="row">
                                <h1>{/*empty*/}</h1>
                            </div>
                            <div className="text-center">
                                <img
                                    src={
                                        wish.wishType === 'BE Someone!'
                                        ? Astronaut_Icon
                                        : wish.wishType === 'SEE Something!'
                                        ? Telescope_Icon
                                        : wish.wishType === 'MEET Someone!'
                                        ? Alien_Icon
                                        : Rocket_Icon
                                    }

                                    height="50%"
                                    width="50%"
                                    className="img-fluid rounded-circle shadow p-0 mb-5 bg-white rounded" alt="wishType"></img>
                                <h5 className="card-title">Type of Wish</h5> {wish.wishType}
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
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Sponsor Logo</h5>
                                    {/*<img src={HomeDepot} className="img-fluid" alt="..."></img>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file" onChange={(x)=>setCompanyLogo(x.currentTarget.value)} onClick={resetFile}/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Sponsor ID</h5>
                                    <form> {/*Figure out how to save sponsor id*/}

                                    <div class="form-group">
                                        {wish.orgId}
                                        <input type="string" className={((role==="manager") && wish.orgId.length===0) ? "form-control": "hidden"} id="SponsorID" placeholder="Enter Sponsor ID" onChange={(x)=>setOrgId(x.currentTarget.value)}></input>

                                    </div>
                                    </form>
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
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file"  onClick={resetFile}/>
                                </div>
                            </div>
                        </div> 
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Picture</h5>
                                    {/*img src={BigPic} className="img-fluid" alt="..."></img>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file"  onClick={resetFile}/>
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
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file"  onChange={(x)=>setVideo(x.currentTarget.value)}  onClick={resetFile}/>
                                </div>
                            </div>
                        </div>  
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Audio</h5>
                                    {/*<img src="..." className="img-fluid" alt="..."></img>*/}
                                    <input className={role==="manager" ? "inputFile" : "hidden"} id="file" type="file"  onChange={(x)=>setAudio(x.currentTarget.value)} onClick={resetFile}/>
                                    
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="row">
                        <h1>{/*empty*/}</h1>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col">
                            <div className="text-right">
                                <div className={role==="manager" ? "visible" : "invisible"} >
                                <button type="button" className="btn btn-primary btn-large" onClick={updateWish}>Save Changes</button> {/*Button does not do anything atm*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}
 
export default withRouter(DetailedChild)