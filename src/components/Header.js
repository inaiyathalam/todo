import React from 'react'

const Header= (props) => {
  return (
    <div>
      <h1 className='Header'>{props.title}</h1>
    </div>
  )
}

//It is a default parameter, which is excecuted when , there is an issue in receiving props by the Header Component
Header.defaultProps ={
    title: "Todo"

}
export default Header
