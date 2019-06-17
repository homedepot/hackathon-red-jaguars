import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Alien_Icon from '../images/Alien_Icon.png'
import Astronaut_Icon from '../images/Astronaut_Icon.png'
import Rocket_Icon from '../images/Rocket_Icon.png'
import Telescope_Icon from '../images/Telescope_Icon.png'
import icn_male from '../images/icn_blue.png'
import icn_female from '../images/icn_pink.png'
import moment from 'moment/moment.js'
import { CSVLink } from 'react-csv'

const Dashboard = props => {
  const year = moment().format('YYYY')
  const [isLoading, setIsLoading] = useState(true)
  const [apiData, setApiData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [query, setQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState(year)
  const [yearList, setYearList] = useState([year-2+"",year-1+"",year+""]);
  const role =
    props && props.location && props.location.state && props.location.state.role
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
        let wholeData=response.data.sort((x,y)=>x.wishDate.slice(-4)>y.wishDate.slice(-4) ? 1 : -1);
        let listOfYears= [...(new Set(wholeData.map(x=>x.wishDate.slice(-4))))];
        if(role==="admin")
          setYearList(listOfYears);
        else
        setYearList([year-2+"",year-1+"",year+""].filter(x=>listOfYears.includes(x)))
        setApiData(wholeData)
        setFilterData(wholeData.filter(x=>x.wishDate.includes(year)))
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
      })
  }, [role,year])

  useEffect(() => {}, [checkBoxes])

  const deleteUser = id => {
    let backupData = apiData;
    let filteredData = apiData.filter(x=>x._id!==id);
    
    setApiData(filteredData.sort((x,y)=>x.wishDate.slice(-4)>y.wishDate.slice(-4) ? 1 : -1))
      setFilterData(filteredData.sort((x,y)=>x.wishDate.slice(-4)>y.wishDate.slice(-4) ? 1 : -1))
    Axios.delete(`http://localhost:3002/wish/delete/${id}`)
      .then(res => {
        
      })
      .catch(err => {
        setApiData(backupData);
        err.send('something went wrong')
      })
  }

  const handleOnChangeSearch = (query, yr) => {
    setQuery(query)
    let passedYear = yr ? yr : selectedYear
    setSelectedYear(passedYear)
    let boxes = checkBoxes
    setFilterData(
      apiData.filter(
        x =>
          (query.includes(' ')
            ? query
                .split(' ')
                .reduce(
                  (r, z) =>
                    r &&
                    ((x.firstName && x.firstName) + (x.sponsor&&  x.sponsor) + (x.homeTown && x.homeTown) + (x.wishDate&& x.wishDate)).includes(z),
                  true
                )
            : ((x.firstName && x.firstName) + (x.sponsor&&  x.sponsor) + (x.homeTown && x.homeTown) + (x.wishDate&& x.wishDate)).includes(
                query
              )) &&
          boxes.filter(
            r =>
              r.value.toLowerCase() ===
              x.wishType.replace(' ', '').toLowerCase()
          )[0].checked &&
          x.wishDate.includes(passedYear)
      ).sort((x,y)=>x.wishDate.slice(-4)>y.wishDate.slice(-4) ? 1 : -1)
    )
  }
  const handleNavToDetailedChild = e => {
    props.history.push('/detailedchild', { wish: e,role:role })
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
                    ((x.firstName && x.firstName) + (x.sponsor&&  x.sponsor) + (x.homeTown && x.homeTown) + (x.wishDate&& x.wishDate)).includes(z),
                  true
                )
            : ((x.firstName && x.firstName) + (x.sponsor&&  x.sponsor) + (x.homeTown && x.homeTown) + (x.wishDate&& x.wishDate)).includes(
                query
              )) &&
          boxes.filter(
            r =>
              r.value.toLowerCase() ===
              x.wishType.replace(' ', '').toLowerCase()
          )[0].checked &&
          x.wishDate.includes(selectedYear)
        )
      })
    )
  }
  let month = ''
  return (
    <div className="container-fluid" style={{ padding: '0rem 10rem 5rem 10rem',backgroundColor:"#f8f9fa" }}>

      <br />
      <div className="row">
        <div className="col-5">
          <div className="input-group" style={{ paddingTop: '1rem' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name, Sponsor, Location and/or Date"
              aria-label="Search by Name, Sponsor, Location and/or Date"
              aria-describedby="btnGroupSearch"
              onChange={e => {
                handleOnChangeSearch(e.currentTarget.value, null)
              }}
            />
            <div className="input-group-prepend">
              <div className="input-group-text" id="btnGroupAddon">
                <i className="material-icons">calendar_today</i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6" style={{ paddingTop: '10px' }}>
          <div>Filter by Wish Type</div>

          {checkBoxes.map(x => (
            <div key={x.value+"div"} className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                key={x.value}
                value={x.value}
                checked={x.checked}
                onChange={e => handleOnCheckboxes(x.value)}
              />
              <label key={x.value+"label"} className="form-check-label" htmlFor="inlineCheckbox1">
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
        <div className="col-12">
          <div className="row">
            {' '}
            <div className="col-8"></div>
            <div className={"col-2 " + role==="admin" ? "" : "hidden"} style={{ textAlign: 'right' }}><CSVLink data={apiData} separator={';'}>
          Download me
        </CSVLink></div>
            <div className="col-2" style={{ textAlign: 'right' }}>
              {yearList.map(z => (
                <label key={z} style={{ color: 'blue', cursor: 'pointer',padding:"0px 5px 0px 5px" }}
                className={selectedYear === z ? 'selectedYear' : ''}
                onClick={() => {
                  setSelectedYear(z)
                  handleOnChangeSearch(query, z)
                }}> {z}
                </label>))}
            </div>
          </div>
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="col-5"></div>
            <div className="col-2">
              {filterData.length === 0 ? <label>No data available</label> : ''}
            </div>
          </div>
          {filterData &&
            filterData.map(x => (
              <div className="container-fluid" style={{}}>
                <div
                  className={
                    'row ' +
                    (month === moment(x.wishDate).format('MMMM') ? 'hidden' : '')
                  }
                  style={{ backgroundColor: '#b5b5b5' }}
                >
                  <div className="col-12">
                    {(month = moment(x.wishDate).format('MMMM'))}
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    padding: '10px 0px 10px 0px',
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
                      backgroundSize: 'contain'
                    }}
                  >
                    <label
                      style={{
                        padding: '5px 0px 0px 0px',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      {moment(x.wishDate).format('dddd')}
                    </label>
                    <br />
                    <div style={{ padding: '5px 5px 10px 25px' }}>
                      {moment(x.wishDate).format('D')}
                    </div>
                  </div>
                  <div
                    className="col-1"
                    style={{ padding: '1rem 0px 10px 1rem' }}
                  >
                    <img
                      style={{borderRadius:"25px"}}
                      src="https://picsum.photos/75/75"
                      alt="{x.firstName}"
                      key={x._id}
                    ></img>
                  </div>
                  <div
                    className={role==="admin" ? "col-6" : "col-7"}
                    style={{ padding: '1rem 1rem 10px 1rem' }}
                  >
                    <label style={{fontSize:"1.5rem"}}>{x.firstName} - Age {x.age} from {x.homeTown}, GA </label><br />{' '}
                    {x.firstName} wishes {x.wishType} {x.wishDetail}
                  </div>
                  <div
                    className="col-1"
                    style={{ padding: '1rem 0px 10px 0px' }}
                  >
                    <img
                      src="https://picsum.photos/60/60"
                      alt={x.firstName}
                      key={x._id + 'logo'}
                    ></img>
                  </div>
                  <div
                    className="col-1"
                    style={{ padding: '1rem 0px 10px 0px' }}
                  >
                    <img
                      src={
                        x.wishType === 'BE Someone!'
                          ? Astronaut_Icon
                          : x.wishType === 'SEE Something!'
                          ? Telescope_Icon
                          : x.wishType === 'MEET Someone!'
                          ? Alien_Icon
                          : Rocket_Icon
                      }
                      height="60"
                      width="60"
                      alt={x.firstName + '_logo'}
                      key={x._id + 'logo'}
                    ></img>
                  </div>
                  <div
                    className={"col-1 " + role==="admin" ? "" : "hidden"}
                    style={{ padding: '1.5rem 0px 10px 0px' }}
                  >
                    <i
                      className="material-icons"
                      style={{ fontSize: '3rem', cursor: 'pointer' ,color:"red"}}
                      onClick={() => deleteUser(x._id)}
                    >
                      close
                    </i>
                  </div>
                  <div
                    className="col-1"
                    style={{ padding: '1.5rem 0px 10px 0px' }}
                  >
                    <i
                      className="material-icons"
                      style={{ fontSize: '3rem', cursor: 'pointer' }}
                      onClick={() => handleNavToDetailedChild(x)}
                    >
                      chevron_right
                    </i>
                  </div>
                </div>
              </div>
            ))}
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard;