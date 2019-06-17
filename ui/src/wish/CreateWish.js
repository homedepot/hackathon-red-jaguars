import React, { Component } from "react";
import './Wish.css';
import Astronaut from '../images/Astronaut_Icon.png';
import Telescope from '../images/Telescope_Icon.png';
import Alien from '../images/Alien_Icon.png';
import Rocket from '../images/Rocket_Icon.png';
//import Galaxy from '../images/Galaxy_Color.png';
//import MakeAWish from '../images/MakeAWishLogo.png';

import Axios from "axios";



const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out


  return valid;
};


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
      formErrors: {
        firstName: "",
        age: "",
        homeTown: "",
        gender: "",
        illness: "",
        wishType: "",
        wishDetail: ""
      }
    };
    this.toggleGender = this.toggleGender.bind(this);
  }



  onChange = e => {
    e.preventDefault();
    console.log(this.state.formErrors);
    let temp = JSON.parse(JSON.stringify(this.state.wish));
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch(name) {
      case 'firstName':
        let first = /^(?=.{3,50}$)[a-z,-]+(?:['_.\s][a-z]+)*$/i.test(value)
        formErrors.firstName = first ? '' : 'First name should be minimum 3 characters required and special character not accepted';
        break;
      case 'age':
        //sorry for party rocking
        formErrors.age = isNaN(value) ? "please provide valid age" : value.length < 1 || value.length  > 2 ? "age should be between 1 and 99  " : "";
        break;
      case 'wishtype':
        formErrors.wishtype = value === 'MEET Someone!' || 'GO Somewhere!' || 'BE Someone!' || 'SEE Something!' ? "" : "please choose your wish type";
        break;
      case 'homeTown':
          let home = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(value)
        formErrors.homeTown = home ? "" : 'hometown should be minimum 2 characters';
        break;
      case 'gender':
        formErrors.gender = value === 'Boy' || 'Girl' ? "" : "please choose your gender";
        break;
        
      case 'illness':
          let ill = /^(?=.{3,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(value)
          formErrors.illness = ill ? "" : 'Illness should be minimum 3 characters';
          break;
      case 'wishDetail':
          let wd = /^(?=.{3,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(value)
          formErrors.wishDetail = wd ? "" : 'Wish detail should be minimum 3 characters';
          break;
      default:
        break;
    }
    this.setState({formErrors, [name]: value}, () => console.log(this.state))
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
    const { firstName, age, homeTown, wishType, illness, wishDetail} = this.state;

    if(firstName==="")
      alert("Please enter first name");
    else if(age==="")
      alert("Please enter your age");
      else  if(homeTown==="" || homeTown === undefined)
      alert("Please enter you hometown");
      else  if(wishType==="")
      alert("Please select your wish type");
      else  if(illness==="" || illness=== undefined)
      alert("Please enter your illness");
      else  if(wishDetail==="" || wishDetail===undefined)
      alert("Please enter your wish detail");

    if(formValid(this.state) && firstName && age && homeTown && wishType && illness && wishDetail) {
     
      console.log(`submitting wish`);
      const formData = new FormData();

      formData.set('firstName' , firstName);
      formData.append('age' , age);
      formData.append('homeTown' , homeTown);
      formData.append('wishType' , wishType);
      formData.append('wishDate', new Date().toLocaleDateString());
      formData.append('gender' , this.state.gender);
      formData.append('illness' , illness);
      formData.append('wishDetail' , wishDetail);
      formData.append('audio' , this.state.audio);
      formData.append('video' , this.state.video);
      formData.append('photo' , document.getElementById("photofile").files[0]);
      Axios({
        url: 'http://localhost:3002/wish/create',
        method: 'POST',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then( () => {
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



    // Axios.post('http://localhost:3002/wish/create', {
    //   firstName: this.state.wish.firstName,
    //   age: this.state.wish.age,
    //   homeTown: this.state.wish.homeTown,
    //   wishType: this.state.wishType,
    //   wishDate: new Date().toLocaleDateString(),
    //   gender: this.state.gender,
    //   illness: this.state.wish.illness,
    //   wishDetail: this.state.wish.wishDetail,
    //   orgId: this.state.wish.orgId,
    //   userId: this.state.wish.userId,
    //   audio: this.state.audio,
    //   video: this.state.video,
    //   photo: this.state.photo
    // })
    //   .then( () => {
    //       this.setState({
    //         wish: wish,
    //       })
    //       console.log(this.state.wish)
    //       this.props.history.push('/postWish');
    //     }
    //   )
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // } else {
    //   console.error("invalid form")
    // }
     
  }}

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wishBackground">
        <table style={{width:"100%"}}>
          <tbody>
          <tr>
            <td>
            <div className="sameLine">
              <p style={{fontSize: '45px', marginRight: '100px'}} className="head">Hello!  Make A Wish</p>
            </div>
            </td>
          </tr>

          <tr>
            <td>
              <p className="sameLine pullLeft">My name is</p>
              
                <input 
                  noValidate
                  className="sameLine surroundSpace firstName" 
                  type="text" 
                  name="firstName"
                  placeholder="enter your name" 
                  value={this.state.wish.firstName}  
                  onChange={ this.onChange }
                />
                

              <p className="sameLine pullLeft"> and I am </p>
              <input 
                noValidate
                className="sameLine surroundSpace age"
                type="text" 
                name="age" 
                placeholder="your age" 
                value={this.state.wish.age}  
                onChange={ this.onChange } 
              />
              {formErrors.age.length > 0 && (
                  <span className="errorMessage">{formErrors.age}</span>
                )}
               
              <p className="sameLine"> years old!</p>
              {formErrors.firstName.length > 0 && (
                  <div className="errorMessage">{formErrors.firstName}</div>
                )}
                
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>I wish to:</p>
                <div className="wishTo">
                  <span className="spacing">
                    <button className={'rounded spacing bgYellow '+ (this.state.wishType==='GO Somewhere!' ? 'selectedTo': '')} name="GoSomewhere">

                      <img 
                        src={Rocket} alt="GO Somewhere!" 
                        onClick={this.onClick} 
                      />
                    </button>

                  </span>
                  <span className="spacing">
                    <button className={'rounded spacing bgYellow '+ (this.state.wishType==='MEET Someone!' ? 'selectedTo': '')}>

                      <img  
                        src={Alien} 
                        alt="MEET Someone!" 
                        onClick={this.onClick} 
                      />

                    </button>
                  </span>
                  
                  <span className="spacing">
                    <button className={'rounded spacing bgYellow '+ (this.state.wishType==='BE Someone!' ? 'selectedTo': '')}>
                      <img 
                        src={Astronaut} 
                        alt="BE Someone!" 
                        onClick={this.onClick} 
                      />
                    </button>
                  </span>

                  <span className="spacing">
                    <button className={'rounded spacing bgYellow '+ (this.state.wishType==='SEE Something!' ? 'selectedTo': '')}>
                      <img 
                        src={Telescope} 
                        alt="SEE Something!" 
                        onClick={this.onClick} 
                      />
                    </button>
                  </span>
                </div>
                {formErrors.wishType.length > 0 && (
                  <div className="errorMessage">{formErrors.firstName}</div>
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Your Home Town: </p>

              <input 
                className="sameLine wideWidth" 
                type="text" 
                name="homeTown" 
                placeholder="your home town" 
                value={this.state.wish.homeTown}  
                onChange={ this.onChange }
              />
                {formErrors.homeTown.length > 0 && (
                  <div className="errorMessage">{formErrors.homeTown}</div>
                )}
              <p>Are you a Boy or a Girl ?</p>
              <label>
                <input
                  name="check"
                  type="radio"
                  value="Boy"
                  onChange={this.toggleGender}
                />
                <span style={{paddingLeft:"5px"}}>Boy</span>
              </label><br/>

              <label key="2">
                <input
                  name="check"
                  type="radio"
                  value="Girl"
                  onChange={this.toggleGender}
                />
                <span style={{paddingLeft:"5px"}}>Girl</span>
              </label>
              <p>I'm Suffering from</p>
              <input 
                className="sameLine wideWidth" 
                type="text" name="illness" 
                placeholder="my illness" 
                value={this.state.wish.illness}  
                onChange={ this.onChange }
              />
              {formErrors.illness.length > 0 && (
                  <div className="errorMessage">{formErrors.illness}</div>
                )}
              <p>My Wish Details</p>
              <textarea
                name="wishDetail"
                className="wideWidth"
                placeholder="My wish details are.."
                value={this.state.wish.wishDetail}
                onChange={this.onChange}
              />
              
            {formErrors.wishDetail.length > 0 && (
                  <div className="errorMessage">{formErrors.wishDetail}</div>
                )}
            </td>
          </tr>
          <tr>
            <td>
              <p>Upload your Favorite photo .!!</p>
              <input className="inputFile" id="photofile" type="file" onChange={this.onhandleChange} onClick={this.resetFile}/>
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
          <tr className="bottomSpace">
            <td>
              <p>Upload supporting videos .!!</p>
              <input className="inputFile"  id="file" type="file" onChange={this.onVideoUpload} onClick={this.resetFile}/>
            </td>
          </tr>
          <tr className="topSpace" >
            <td>
              <br/>
              <button className="sameLine fancyButtons largeButton" onClick={this.saveWish}>Submit My Wish</button>
            </td>
            <td className="sameLine">
              <br/>
              <button className="fancyButtons"  onClick={this.goBack}>Go Back</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default CreateWish;