import React from 'react'

class Urban extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    // if (this.props.urban.list) {
    //   console.log(this.props.urban.list[0].definition)
    // }
    return (
      <div>
        {this.props.urban.list && <p>{this.props.urban.list[0].definition} <br/>{this.props.urban.list[0].example}</p>}
      </div>
    )
  }
}

export default Urban
