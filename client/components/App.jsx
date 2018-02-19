import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
// import Home from './Home'
import Login from './Login'
import Register from './Register'

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/register'><button>Register</button></Link>
        <Link to='/login'><button>Login</button></Link>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        
        {/* <Login /> */}
      </div>
    </Router>
  )
}

export default App
