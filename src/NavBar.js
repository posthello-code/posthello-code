import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {

  render() {
    return (
      <div className="Nav">
         <div className='navLink'><Link to="/">Home</Link></div>
         <div className='navLink'><Link to="/contact">Contact</Link></div>
         <hr></hr>
      </div>
    )
  }
}