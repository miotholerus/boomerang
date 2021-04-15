import React from 'react'

export default function Header() {
  return (
    <div className="header flex">
      
      <div className="left">
        <i className="fa fa-bars"></i>
        <span className="banner"> Boomerang </span>
      </div>

      <div className="right">
        <span className="my-account">Siri </span>
        <i className="fa fa-user-circle menu-user-icon"></i>
      </div>

    </div>
  )
}
