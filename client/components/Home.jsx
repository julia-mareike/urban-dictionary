import React from 'react'
import request from 'superagent'

import Urban from './Urban'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      urbanObject: {},
      word: ''
    }
    this.getUrban = this.getUrban.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getUrban () {
    const word = this.state.word
    request
      .get('http://api.urbandictionary.com/v0/define?term=' + word)
      .then(res => {
        this.setState({
          urbanObject: res.body,
          word: ''
        })
      })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <h1> Welcome to Julia-Stina Name Definer! </h1>
        <form> <input type='text' onChange={this.handleChange} placeholder='Search' name='word'/>
          <button type='button'onClick={this.getUrban}>Define Me!</button>
        </form>
        {/* {this.state.urbanObject} */}
        <Urban urban={this.state.urbanObject} />
        
      </div>
    )
  }
}
