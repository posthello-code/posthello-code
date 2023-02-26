import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button, Text } from 'grommet';

export class GrommetButtonNav extends Component {
  render() {
    const { text, path } = this.props;
    return (
      <Link to={path}>
        <Button label={
          <Text color='white'>{text}</Text>} color="white"></Button>
      </Link>
    )
  }
}

export class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <div className='navLink'>
          <GrommetButtonNav text="Home" path="/"></GrommetButtonNav>
        </div>
        <div className='navLink'>
          <GrommetButtonNav text="Blog" path="/blog"></GrommetButtonNav>
        </div>
        <div className='navLink'>
          <GrommetButtonNav text="Contact" path="/contact"></GrommetButtonNav>
        </div>
        <hr></hr>
      </div>
    )
  }
}