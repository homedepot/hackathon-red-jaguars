import React, { Component } from 'react'
import "./Landing.css"
import MakeAWishLogo from '../images/MakeAWishLogo.png'
import GalaxyLogo from '../images/Galaxy.png'


export default class Landing extends Component {
  render() {
    return (
      <div>
        <body>
          <div id="banner">
            <div class="inline-block">
              <img src={MakeAWishLogo} alt="MakeAWishLogo" width= "300px" height= "100px"/>
            </div>

            <div class="inline-block">
              <img src={GalaxyLogo} alt="Galaxy" width="500px" height="250px"/>
            </div>
            <button title="LargeButton"> <a href="./login">Large Button</a></button>
          </div>
        </body>
      </div>
    )
  }
}


