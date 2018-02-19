import React from 'react'
import request from 'superagent'
// import {connect} from 'react-redux'

// import {registerUser, registerError} from '../actions/register'
import ErrorMessage from './ErrorMessage'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (event) {
    const {username, password, confirm} = this.state
    console.log(username)
    if (password !== confirm) {
      console.log(error)
      this.props.registerError('Passwords do not match!')
    }
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    //  this.props.registerUser(creds)
    request
      .post('/api/v1/register')
      .send(creds)
      .end((err, res) => {
        if (err) console.log(err)
        console.log('res', res)
      })
  }

  render () {
    const {username, password, confirm} = this.state
    return (
      <div>
          <p><input name='username' placeholder='Username'
            onChange={this.handleChange} value={username} /></p>

          <p><input type='password' name='password' placeholder='Password'
            onChange={this.handleChange} value={password} /></p>

          <p><input type='password' name='confirm' placeholder='Confirm'
            onChange={this.handleChange} value={confirm} /></p>

          <button onClick={this.handleClick}>Register</button>
        <ErrorMessage reducer='auth' />
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     registerUser: (creds) => {
//       return dispatch(registerUser(creds))
//     },
//     registerError: (message) => {
//       dispatch(registerError(message))
//     }
//   }
// }

// export default connect(null, mapDispatchToProps)(Register)

export default Register
