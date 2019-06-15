import React, { Component } from "react";
import './Wish.css';
import Astronaut from '../../images/Astronaut_Icon.png';
import Telescope from '../../images/Telescope_Icon.png';
import Alien from '../../images/Alien_Icon.png';
import Rocket from '../../images/Rocket_Icon.png';

import Axios from "axios";
//import uuid from "uuid";

class CreateCampaign extends Component {
  constructor() {
    super();
    this.state = {
      wishType:'',
      firstName: '',
      age: '',
      wish: {
      "firstName": "",
      "age": "",
      "homeTown": "",
      "wishType": "",
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

  saveWish = () => {
    let wish = this.state.wish;
    Axios.post('http://localhost:3002/wish/create', {
      firstName: this.state.wish.firstName,
      age: this.state.wish.age,
      homeTown: this.state.wish.homeTown,
      wishType: this.state.wish.wishType,
      wishDate: new Date(),
      illness: this.state.wish.illness,
      wishDetail: this.state.wish.wishDetail,
      orgId: this.state.wish.orgId,
      userId: this.state.wish.userId,
      audio: this.state.wish.audio,
      video: this.state.wish.video,
      photo: this.state.wish.photo
    })
      .then( () => {
          this.setState({
            wish: wish,
          })
        console.log(this.state.wish)
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
            <div>
              <p>Hello!</p>
              <p>Make A Wish</p>
            </div>
            </td>
          </tr>
          
          <tr>
            <td>
              <p className="sameLine">My name is</p>
              <input className="sameLine" type="text" name="firstName" placeholder="enter your name" value={this.state.wish.firstName}  onChange={ this.onChange }/>
              <p className="sameLine"> and I am </p>
              <input className="sameLine" type="text" name="age" placeholder="your age" value={this.state.wish.age}  onChange={ this.onChange }/>
              <p className="sameLine"> years old!</p>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>I wish to:</p>
                <div>
                  <span className="spacing">
                    <button name="GoSomewhere"><img src={Rocket} alt="GO Somewhere!" onClick={this.onClick} /></button>
                  </span>
                  <span className="spacing">
                    <button><img src={Alien} alt="MEET Someone!" onClick={this.onClick} /></button>
                  </span>
                  <span className="spacing">
                    <button><img src={Astronaut} alt="BE Someone!" onClick={this.onClick} /></button>
                  </span>
                  <span className="spacing">
                    <button><img src={Telescope} alt="SEE Something!" onClick={this.onClick} /></button>
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Your Home Town: </p>
              <input className="sameLine" type="text" name="homeTown" placeholder="your home town" value={this.state.wish.homeTown}  onChange={ this.onChange }/>
              <p>I'm Suffering from</p>
              <input className="sameLine" type="text" name="illness" placeholder="my illness" value={this.state.wish.illness}  onChange={ this.onChange }/>
              <p>My Wish Details</p>
              <textarea
                name="wishDetail"
                placeholder="My wish details are.."
                value={this.state.wish.wishDetail}
                onChange={this.onChange}
              />
            </td>
          </tr>
          <tr>
            <td><button  onClick={this.goBack}>Go Back</button></td>
              <td><button onClick={this.saveWish}>Submit My Wish</button></td>
          </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default CreateCampaign;