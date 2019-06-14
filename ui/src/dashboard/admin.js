import React, { Component } from 'react';
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishList: [], 
            del: '',
            value: ''
         }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.getUsers();
        this.deleteUser();
    }


    deleteUser = () => {
        // axios.delete(`http://localhost:3002/wish/delete?id=${this.state.value}`)
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }

    getUsers = () => {

        axios.get('http://localhost:3002/wish/findall')
        .then((res) => {
            console.log('admin',res.data)
            this.setState({wishList: res.data})
            console.log(this.state.wishList[0]._id)
        })
        .catch((err) => {
            console.log(err)
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
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Age</th>
      <th scope="col">HomeTown</th>
    </tr>
  </thead>
  <tbody>
      { 
          this.state.wishList.map((e,i) => { 
              // renders one row for each item from state
           return <tr>
                {/* <th scope="row">{i}</th> */}
                <td>{e._id}</td>
                <td>{e.firstName}</td>
                <td>{e.age}</td>
                <td>{e.homeTown}</td>
            </tr>

          })
        }
  </tbody>
</table>

<CSVLink data={this.state.wishList} separator={";"}>
    Download me
</CSVLink>

        </div> );
    }
}
 
export default Admin;