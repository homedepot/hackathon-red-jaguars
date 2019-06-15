import React, { Component } from "react";
import './Wish.css';
import Astronaut from '../../images/Astronaut_Icon.png';
import Telescope from '../../images/Telescope_Icon.png';
import Alien from '../../images/Alien_Icon.png';
import Rocket from '../../images/Rocket_Icon.png';
import Galaxy from '../../images/Galaxy_Color.png';

import Axios from "axios";

class CreateWish extends Component {
  constructor() {
    super();
    this.state = {
      wishType:'',
      firstName: '',
      photo: '',
      gender: '',
      audio: '',
      video: '',
      age: '',
      wish: {
      "firstName": "",
      "age": "",
      "homeTown": "",
      "wishType": "",
      "gender": "",
      "wishDate": "",
      "illness": "",
      "wishDetail": "",
      "orgId": "",
      "userId": "",
      "audio": "",
      "video": "",
      "photo": ""
      },
    };
    this.toggleGender = this.toggleGender.bind(this);
  }

  onChange = (e) => {
    let temp = JSON.parse(JSON.stringify(this.state.wish));
    temp[e.target.name] = e.target.value;
    this.setState({
      wish: temp,
    });
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.history.push("/landing");
  }

  onClick = (e) => {
    console.log('clicked', e.target.alt);
    this.setState({
      wishType: e.target.alt
    })
  }

  toggleGender = (e) => {
    this.setState ({gender : e.target.value },
      () =>
    console.log(this.state.gender))
  }

  onhandleChange = (e) => {
    this.setState ({
      photo: URL.createObjectURL(e.target.files[0])
    })
  }

  onAudioUpload = (e) => {
    this.setState ({
      audio: URL.createObjectURL(e.target.files[0])
    })
  }

  onVideoUpload = (e) => {
    this.setState ({
      video: URL.createObjectURL(e.target.files[0])
    })
  }

  resetFile = e => {
    e.target.value = null;
  };

  saveWish = () => {
    let wish = this.state.wish;
    Axios.post('http://localhost:3002/wish/create', {
      firstName: this.state.wish.firstName,
      age: this.state.wish.age,
      homeTown: this.state.homeTown,
      wishType: this.state.wishType,
      wishDate: new Date(),
      gender: this.state.gender,
      illness: this.state.wish.illness,
      wishDetail: this.state.wish.wishDetail,
      orgId: this.state.wish.orgId,
      userId: this.state.wish.userId,
      audio: this.state.audio,
      video: this.state.video,
      photo: this.state.photo
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

  render() {
    return (
      <div className="wishBackground">
        <table>
          <tbody>
          <tr>
            <td>
            <div className="sameLine">
              <p style={{fontSize: '45px', marginRight: '100px'}} className="head">Hello!  Make A Wish</p>
            </div>
              <span className="sameLine pullRight"><img className="imageBanner" src={Galaxy} alt="MEET Someone!"/></span>
            </td>
          </tr>
          
          <tr>
            <td>
              <p className="sameLine pullLeft">My name is</p>
              <input className="sameLine surroundSpace" type="text" name="firstName" placeholder="enter your name" value={this.state.wish.firstName}  onChange={ this.onChange }/>
              <p className="sameLine pullLeft"> and I am </p>
              <input className="sameLine surroundSpace" type="text" name="age" placeholder="your age" value={this.state.wish.age}  onChange={ this.onChange }/>
              <p className="sameLine"> years old!</p>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>I wish to:</p>
                <div>
                  <span className="spacing">
                    <button className="spacing bgYellow" name="GoSomewhere"><img src={Rocket} alt="GO Somewhere!" onClick={this.onClick} /></button>
                  </span>
                  <span className="spacing">
                    <button className="spacing bgYellow"><img  src={Alien} alt="MEET Someone!" onClick={this.onClick} /></button>
                  </span>
                  <span className="spacing">
                    <button className="spacing bgYellow"><img src={Astronaut} alt="BE Someone!" onClick={this.onClick} /></button>
                  </span>
                  <span className="spacing">
                    <button className="spacing bgYellow"><img src={Telescope} alt="SEE Something!" onClick={this.onClick} /></button>
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Your Home Town: </p>
              <input className="sameLine wideWidth" type="text" name="homeTown" placeholder="your home town" value={this.state.wish.homeTown}  onChange={ this.onChange }/>
              <p>Are you a Boy or a Girl ?</p>
              <ul>
                <li key="1">
                  <label>
                    <input
                      name="check"
                      type="radio"
                      value="Boy"
                      onChange={this.toggleGender}
                    />
                    Boy
                  </label>
                </li>

                <li>
                  <label key="2">
                    <input
                      name="check"
                      type="radio"
                      value="Girl"
                      onChange={this.toggleGender}
                    />
                    Girl
                  </label>
                </li>
              </ul>
              <p>I'm Suffering from</p>
              <input className="sameLine wideWidth" type="text" name="illness" placeholder="my illness" value={this.state.wish.illness}  onChange={ this.onChange }/>
              <p>My Wish Details</p>
              <textarea
                name="wishDetail"
                className="wideWidth"
                placeholder="My wish details are.."
                value={this.state.wish.wishDetail}
                onChange={this.onChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Upload your Favourite photo .!!</p>
              <input className="inputFile" id="file" type="file" onChange={this.onhandleChange} onClick={this.resetFile}/>
            </td>
          </tr>
          <tr>
            <td>
              <img className={this.state.photo ? "imageDim": "hidden"} src={this.state.photo} alt="MyPic"/>
            </td>
          </tr>
          <tr>
            <td>
              <p>Record an audio testimonial .!!</p>
              <input className="inputFile"  id="file" type="file" onChange={this.onAudioUpload} onClick={this.resetFile}/>
            </td>
          </tr>
          <tr>
            <td>
              {/*<img src={this.state.audio} alt=""/>*/}
            </td>
          </tr>

          <tr>
            <td>
              <p>Upload supporting videos .!!</p>
              <input className="inputFile"  id="file" type="file" onChange={this.onVideoUpload} onClick={this.resetFile}/>
            </td>
          </tr>
          <tr>
            <td>
              {/*<img src={this.state.video} alt=""/>*/}
            </td>
          </tr>

          <tr>
            <td><button className="sameLine fancyButtons" onClick={this.saveWish}>Submit My Wish</button></td>
            <td className="sameLine"><button className="fancyButtons"  onClick={this.goBack}>Go Back</button></td>
          </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default CreateWish;