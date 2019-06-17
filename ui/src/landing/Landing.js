import React,{useState} from 'react'
import Axios from 'axios'

const Landing =(props)=>  {
  const role = props && props.location && props.location.state && props.location.state.role;
  const [volunteer,setVolunteer] = useState("");
  const [sponsor,setSponsor] = useState("");
  const handleSubmitVolonteer  = (e)=>{
    const formData = new FormData()
    if(e==="volunteer")
    formData.set('photo' , document.getElementById("volunteerfile") && document.getElementById("volunteerfile").files[0]);
    else
    formData.set('photo' , document.getElementById("sponsorfile") &&  document.getElementById("sponsorfile").files[0]);
    formData.append(
      'fileName', (e==="volunteer" ? e+volunteer : e+sponsor)
    )
    let url = 'http://localhost:3002/about/picUpload/'
    Axios({
      url: url,
      method: 'POST',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(() => {
        props.history.push('/dashboard', { role: role })
      })
      .catch(function(error) {
        console.log(error)
      })
  }
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
                <div className={(role==="admin" ? "" : "hidden")}>
                  <input className={"inputFile "} id="volunteerfile" type="file" />
                  <input type="radio" name="volunteerfile" value="slot1" onChange={x=> setVolunteer(x.currentTarget.value)}/>&nbsp;Slot 1 &nbsp;
                  <input type="radio" name="volunteerfile" value="slot2" onChange={x=> setVolunteer(x.currentTarget.value)}/> &nbsp;Slot 2 &nbsp;
                  <input type="radio" name="volunteerfile" value="slot3" onChange={x=> setVolunteer(x.currentTarget.value)}/>&nbsp;Slot 3 &nbsp;
                  <button className="btn btn-success" onClick={()=>handleSubmitVolonteer("volunteer")}>Upload</button>

                  <br/>
                  <br/><br/>

                  </div>
                <img className="card-top" src="http://localhost:3002/uploads/volunteerslot1.png" height="300" width="780" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more information</a>
              </div>
                <div className="card-body">
                <img className="card-top" src="http://localhost:3002/uploads/volunteerslot2.png" height="300" width="780" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more information</a>
              </div>
              <div className="card-body">
              <img className="card-top" src="http://localhost:3002/uploads/volunteerslot3.png" height="300" width="780" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more information</a>
              </div>
            </div>
            </div>
            <div className = "col-3">
            <div className="text-center">
            <div className="card">
              <div className="card-body">
              <h1 className="card-title">Sponsors</h1>

                <div className={(role==="admin" ? "" : "hidden")}>
                  <input className={"inputFile "} id="sponsorfile" type="file" />
                  <input type="radio" name="sponsorfileslot" value="slot1" onChange={x=> setSponsor(x.currentTarget.value)}/>&nbsp;Slot 1 &nbsp;
                  <input type="radio" name="sponsorfileslot" value="slot2" onChange={x=> setSponsor(x.currentTarget.value)}/> &nbsp;Slot 2 &nbsp;
                  <input type="radio" name="sponsorfileslot" value="slot3" onChange={x=> setSponsor(x.currentTarget.value)}/>&nbsp;Slot 3 &nbsp;
                  <button className="btn btn-success" onClick={()=>handleSubmitVolonteer("sponsor")}>Upload</button>

                  <br/>
                  <br/><br/>
                </div>
                <img className="card-top" src="http://localhost:3002/uploads/sponsorslot1.png" height="200" width="200" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more</a>
              </div>
              <div className="card-body">
                <img className="card-top" src="http://localhost:3002/uploads/sponsorslot2.png" height="200" width="200" alt="Card cap"></img>
                <a href="/" className="btn btn-primary">Learn more</a>
              </div>
              <div className="card-body">
                <img className="card-top" src="http://localhost:3002/uploads/sponsorslot3.png" height="200" width="200" alt="Card cap"></img>
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

export default Landing;