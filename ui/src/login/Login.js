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
      lastName: ''
    }
  }

  createUser = async e => {
    e.preventDefault()

    const { username, password, firstName, lastName } = this.state

    try {
      await axios.post(`${this.expressDomain}/auth/register`, {
        username,
        password,
        firstName,
        lastName,
        role: 'user'
      })

      this.setState({
        username: '',
        password: '',
        role: 'user'
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
      if (response.data.role ==="user") this.props.history.push('/createWish')
      else this.props.history.push('/dashboard')
    } catch (e) {}
  }

  handleFormFieldChange = (key, { target: { value } }) => {
    this.setState({ [key]: value })
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
                } id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="string" class="form-control"
                  onChange={event => this.handleFormFieldChange('lastName', event)
                } id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="string" class="form-control" id="exampleInputEmail1"                 
                  onChange={event => this.handleFormFieldChange('username', event)
                }aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" 
                  onChange={event => this.handleFormFieldChange('password', event)
                }id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            <div class = "col-6">
            <h3>Login</h3>
            <form onSubmit={this.loginUser} data-register-form>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="string" class="form-control"                 
                  onChange={event => this.handleFormFieldChange('username', event)
                }id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" 
                  onChange={event => this.handleFormFieldChange('password', event)
                }id="exampleInputPassword1" placeholder="Password"></input>
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
