import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import tobe from '../images/Astronaut_Icon.png'
import tosee from '../images/Telescope_Icon.png'
import tomeet from '../images/Alien_Icon.png'
import togo from '../images/Rocket_Icon.png'
import icn_male from '../images/icn_blue.png'
import icn_female from '../images/icn_pink.png'
import moment from 'moment/moment.js'
import { CSVLink } from "react-csv"


const Dashboard = (props) => {
  process.env.REACT_APP_expressDomain || 'http://localhost:3002'

  const year = moment().format('YYYY')
  const [isLoading, setIsLoading] = useState(true)
  const [apiData, setApiData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [query, setQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState(year)
  const role = props && props.location && props.location.state && props.location.state.role;
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
        setFilterData(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
      })
  }, [])

  useEffect(() => {}, [checkBoxes])

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3002/wish/delete/${id}`)
    .then((res) => {
        Axios.get(`${expressDomain}/wish/findall`)
        .then((res) => {
            setApiData(res.data);
        })
        .catch((err) => {
          err.send("something went wrong");
        })
    })
    .catch((err) => {
        err.send("something went wrong");
    })
}

  const handleOnChangeSearch = (query,yr) => {
    setQuery(query);
    let passedYear = yr ? yr : selectedYear;
    setSelectedYear(passedYear);
    let boxes = checkBoxes;
    setFilterData(
      apiData.filter(
        x =>
          (query.includes(' ')
            ? query
                .split(' ')
                .reduce(
                  (r, z) =>
                    r &&
                    (x.firstName + x.sponsor + x.homeTown + x.date).includes(z),
                  true
                )
            : (x.firstName + x.sponsor + x.homeTown + x.date).includes(
                query
              )) &&
              boxes.filter(
            r =>
              r.value.toLowerCase() ===
              x.wishType.replace(' ', '').toLowerCase()
          )[0].checked && x.date.includes(passedYear)
      )
    )
  }
  const handleNav = e =>{
    props.history.push("/detailedchild",{id: e})
  }
  const handleOnCheckboxes = e => {
    let boxes = checkBoxes.map(z => {
      if (z.value === e) {
        z.checked = !z.checked
      }
      return z
    })
    setCheckBoxes(boxes)
    setFilterData(
      apiData.filter(x => {
        return (
          (query.includes(' ')
            ? query
                .split(' ')
                .reduce(
                  (r, z) =>
                    r &&
                    (x.firstName + x.sponsor + x.homeTown + x.date).includes(z),
                  true
                )
            : (x.firstName + x.sponsor + x.homeTown + x.date).includes(
                query
              )) &&
          boxes.filter(
            r =>
              r.value.toLowerCase() ===
              x.wishType.replace(' ', '').toLowerCase()
          )[0].checked && x.date.includes(selectedYear)
        )
      })
    )
  }
  let month = "";
  return (
    <div className="container-fluid" style={{ paddingLeft: '10rem' }}>
      <h1>Welcome to the Hackathon Dashboard Page  {role}</h1>
     
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
              onChange={e => {
                handleOnChangeSearch(e.currentTarget.value,null)
              }}
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
                onChange={e => handleOnCheckboxes(x.value)}
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
        <div className="col-9">
          <div className="row">
            {' '}
            <div className="col-10"></div>
            <div className="col-2">
              <label
                style={{ color: 'blue', cursor: 'pointer' }}
                className={selectedYear === year - 2 ? 'selectedYear' : ''}
                onClick={() => {setSelectedYear(year - 2);handleOnChangeSearch(query,year-2)}}
              >
                {year - 2}
              </label>{' '}
              <label
                style={{ color: 'blue', cursor: 'pointer' }}
                className={selectedYear === year - 1 ? 'selectedYear' : ''}
                onClick={() => {setSelectedYear(year - 1);handleOnChangeSearch(query,year-1)}}
              >
                {year - 1}
              </label>{' '}
              <label
                style={{ color: 'blue', cursor: 'pointer' }}
                className={selectedYear === year ? 'selectedYear' : ''}
                onClick={() => {setSelectedYear(year);handleOnChangeSearch(query,year)}}
              >
                {year}
              </label>{' '}
            </div>
          </div>
          {filterData && filterData.map(x => (
  
          <div
            className="container-fluid"
            style={{  }}
          >
            <div className={"row " + (month === moment(x.date).format("MMMM") ?  "hidden" : "") }>
                <div className="col-12">{month = moment(x.date).format("MMMM")}</div> 
               
            </div>
              <div
                className="row"
                style={{
                  padding: '10px 0px 10px 0px',
                  borderBottom: '1px solid black',
                  border: '1px solid black'
                }}
              >
                <div
                  className="col-1"
                  style={{
                    backgroundImage:
                      'url(' +
                      (x.gender === 'male' ? icn_male : icn_female) +
                      ')',
                    height: '100px',
                    backgroundSize: 'cover'
                  }}
                >
                  <label
                    style={{
                      padding: '5px 0px 0px 0px',
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {moment(x.date).format('dddd')}
                  </label>
                  <br />
                  <div style={{ padding: '5px 5px 10px 25px' }}>
                    {moment(x.date).format('D')}
                    {/* {x.date} */}
                  </div>
                </div>
                <div
                  className="col-1"
                  style={{ padding: '1rem 0px 10px 1rem' }}
                >
                  <img
                    src="https://picsum.photos/50/50"
                    alt="{x.firstName}"
                    key={x._id}
                  ></img>
                </div>
                <div className="col-7" style={{ padding: '1rem 0px 10px 0px' }}>
                  {x.firstName} - Age {x.age} from {x.homeTown}, GA <br />{' '}
                  {x.firstName} wishes {x.wishType} {x.wishDetail}
                </div>
                <div className="col-1" style={{ padding: '1rem 0px 10px 0px' }}>
                  <img
                    src="https://picsum.photos/51/50"
                    alt={x.firstName}
                    key={x._id + 'logo'}
                  ></img>
                </div>
                <div className="col-1" style={{ padding: '1rem 0px 10px 0px' }}>
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
                <div className="col-1" style={{ padding: '1rem 0px 10px 0px' }}>
                  <i className="material-icons" style={{ fontSize: '3rem',cursor:"pointer" }} onClick={()=>handleNav(x._id)}>
                    chevron_right
                  </i>
                </div>
                <button onClick={() => deleteUser(x._id)} type="button" class="btn btn-danger">Delete</button>

              </div>
           
          </div>
           ))}
        </div>
      </div>
      <CSVLink data={apiData} separator={";"}>
            Download me
        </CSVLink>
    </div>
  )
}

export default Dashboard
