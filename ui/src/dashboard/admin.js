import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            del: '',
            value: ''
         }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {

        axios.delete(`http://localhost:3002/wish/delete?id=${this.state.value}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({value: this.state.del})
    }

    handleInput = (e) => {
        let del;
        del = e.target.value;
        this.setState({del: del})
    }
    render() { 
        return ( <div>
            <input onChange={this.handleInput} ></input>
            <button onClick={this.handleSubmit}>delete wish</button>
            ADMIN PAGE
        </div> );
    }
}
 
export default Admin;