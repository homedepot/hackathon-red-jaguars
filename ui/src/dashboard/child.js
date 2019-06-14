import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            First Name: {this.props.firstName},
            <br />
            Last Name: {this.props.lastName},
            <br />
            Hometown: {this.props.homeTown},
            <br />
            Age: {this.props.age}
            <br />
        </div> );
    }
}
 
export default Child;