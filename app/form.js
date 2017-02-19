import React from 'react'
import Btn from './btn'
import Counter from './counter'

export default class Form extends React.Component {

  constructor(...args) {
    super(...args)
    this.state = { counter: 0 }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (){
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <div>
          <Counter value={this.state.counter}/>
          <Btn value="+" onClick={this.clickHandler}/>
      </div>
    )
  }
}