import React from 'react'

export default class Counter extends React.Component {
  render(){
    const {value} = this.props
    return <span className="counter">{value}</span>
  }
}

Counter.propTypes = {
  value: React.PropTypes.number
}
