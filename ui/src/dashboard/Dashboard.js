import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import tobe from '../images/Astronaut_Icon.png'
import tosee from '../images/Telescope_Icon.png'
import tomeet from '../images/Alien_Icon.png'
import togo from '../images/Rocket_Icon.png'
import icn_male from '../images/icn_blue.png'
import icn_female from '../images/icn_pink.png'
import moment from "moment/moment.js";


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [apiData, setApiData] = useState([])
  const [checkBoxes, setCheckBoxes] = useState([
    {
      label: 'To Go',
      checked: true,
      value: 'togo'
    },
    {
      label: 'To Meet',
      checked: true,
      value: 'tomeet'
    },
    {
      label: 'To Be',
      checked: true,
      value: 'tobe'
    },
    {
      label: 'To See',
      checked: true,
      value: 'tosee'
    }
  ])

  useEffect(() => {
    setIsLoading(true)
    Axios.get(`http://localhost:3002/wish/findAll`, {})
      .then(response => {
        setApiData(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
      })
  }, [])

  

  return (
    <div className="container-fluid" style={{ paddingLeft: '10rem' }}>
      
      <h1>Welcome to the Hackathon Dashboard Page</h1>

      <br />
      <div className="row">
        <div className="col-4">
          <div className="input-group" style={{ paddingTop: '1rem' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name, Sponsor, Location and/or Date"
              aria-label="Search by Name, Sponsor, Location and/or Date"
              aria-describedby="btnGroupSearch"
              
            />
            <div className="input-group-prepend">
              <div className="input-group-text" id="btnGroupAddon">
                <i className="material-icons">calendar_today</i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4" style={{ paddingTop: '10px' }}>
          <div>Filter by Wish Type</div>

          {checkBoxes.map(x => (
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                key={x.value}
                value={x.value}
                checked={x.checked}
                onChange={(x)=>{
                  setCheckBoxes( checkBoxes.map(z=> 
                    {
                      if(z.value===x.currentTarget.value)
                      {
                        z.checked = !z.checked; 
                      }
                      return z;
                    }))
                  }
                }
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                {x.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={`lds-roller` + (isLoading ? `` : `hidden`)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br />
      <div className="row">
        <div className="col-8" style={{ border: '1px solid black' }}>
          <div className="container-fluid">
            {apiData.map(x => (
              <div className="row" style={{padding:"10px 0px 10px 0px", borderBottom:"1px solid black"}}>
                <div className="col-1" style={{backgroundImage:'url('+(x.gender ==='male' ? icn_male : icn_female)+')',height:"90px",backgroundSize:"cover"}}>

                <label style={{padding:"5px 0px 0px 5px", fontWeight:"bold",color:"white"}}>{moment(x.date).format('dddd')}</label><br/>
                  <div style={{ padding: '5px 5px 10px 20px' }}>
                    {moment(x.date).format('D')}
                  {/* {x.date} */}
                  
                  </div>
                </div>
                <div className="col-1" style={{padding:"1rem 0px 10px 1rem"}} >
                  <img
                    src="https://picsum.photos/50/50"
                    alt="{x.firstName}"
                    key={x._id}
                  ></img>
                </div>
                <div className="col-7" style={{padding:"1rem 0px 10px 0px"}}>
                  {x.firstName} - Age {x.age} from {x.homeTown}, GA <br />{' '}
                  {x.firstName} wishes {x.wishType} {x.wishDetail}
                </div>
                <div className="col-1" style={{padding:"1rem 0px 10px 0px"}}>
                  <img
                    src="https://picsum.photos/51/50"
                    alt={x.firstName}
                    key={x._id + 'logo'}
                  ></img>
                </div>
                <div className="col-1" style={{padding:"1rem 0px 10px 0px"}}>
                  <img
                    src={
                      x.wishType === 'tobe'
                        ? tobe
                        : x.wishType === 'tosee'
                        ? tosee
                        : x.wishType === 'tomeet'
                        ? tomeet
                        : togo
                    }
                    height="50"
                    width="50"
                    alt={x.firstName + '_logo'}
                    key={x._id + 'logo'}
                  ></img>
                </div>
                <div className="col-1" style={{padding:"1rem 0px 10px 0px"}}>
                  
                  <button href="/detailedChild"><i className="material-icons" style={{fontSize:"3rem"}}>chevron_right</i></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
