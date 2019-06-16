import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)

    this.expressDomain =
      process.env.REACT_APP_expressDomain || 'http://localhost:3002'

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      role: 'user'
    }
  }
  
  createUser = async e => {
    e.preventDefault()

    const { username, password, firstName, lastName,role } = this.state

    try {
      await axios.post(`${this.expressDomain}/auth/register`, {
        username,
        password,
        firstName,
        lastName,
        role
      })
      alert("Thanks for registering!!!")
      this.setState({
        username: '',
        password: '',
        role: ''
      })
    } catch (e) {}
  }

  loginUser = async e => {
    e.preventDefault()

    const { username, password } = this.state

    try {
      const response = await axios
        .create({ withCredentials: true })
        .post(`${this.expressDomain}/auth/login`, {
          username,
          password
        })
      if (response.data.role ==="user") 
        this.props.history.push('/createWish')
      else 
        this.props.history.push('/dashboard',{role: response.data.role})
    } catch (e) {}
  }

  handleFormFieldChange = (key, { target: { value } }) => {
    this.setState({ [key]: value })
  }
  handleChecked =(e)=>{
    this.setState({ role: e.currentTarget.checked ? "curator" : "user" })
  }

  render() {
    return (
      <div>
        <div class = "container">
          <div class = "row">
            <div class = "col-6">
            <h3>Register</h3>
            <form onSubmit={this.createUser} data-register-form>
              <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="string" class="form-control"                 
                  onChange={event => this.handleFormFieldChange('firstName', event)
                } data-register-first-name id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="string" class="form-control"
                  onChange={event => this.handleFormFieldChange('lastName', event)
                } data-register-last-name id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name"></input>
              </div>
              
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="string" class="form-control" id="exampleInputEmail1"                 
                  onChange={event => this.handleFormFieldChange('username', event)
                } data-register-username aria-describedby="emailHelp" placeholder="Enter Username"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" 
                  onChange={event => this.handleFormFieldChange('password', event)
                } data-register-password id="exampleInputPassword1" placeholder="Enter Password"></input>
              </div>
              <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="curator" id="role" data-register-role  onChange={event => this.handleChecked( event)} />
                <label class="form-check-label" for="role">
                Please check if you are a curator
                </label>
              </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            <div class = "col-6">
            <h3>Login</h3>
            <form onSubmit={this.loginUser} data-login-form>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="string" class="form-control"                 
                  onChange={event => this.handleFormFieldChange('username', event)
                } data-login-username id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control"  
                  onChange={event => this.handleFormFieldChange('password', event)
                } data-login-password id="exampleInputPassword1" placeholder="Enter Password"></input>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Login }
export default withRouter(Login)
