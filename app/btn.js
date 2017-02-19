import React from 'react'

const Btn =  props =>  {
  const {onClick, value} = props

  return (
    <button onClick={onClick} value={value}/>
  )
}

Btn.propTypes = {
  onClick: React.PropTypes.func,
  value: React.PropTypes.string
}

export default Btn