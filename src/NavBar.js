import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button, Text } from 'grommet';
import { Home, Blog, Contact } from 'grommet-icons';

export class GrommetButtonNav extends Component {
  render() {
    const { text, path, icon } = this.props;
    return (
      <Link to={path}>
        <Button icon={icon} label={
          <Text color='white'>{text}</Text>} color="white"></Button>
      </Link>
    )
  }
}

export class NavBar extends Component {
  render() {
    return (
      <div id="nav-bar" className="Nav">
        <div className='navLink'>
          <GrommetButtonNav icon={<Home />} text="Home" path="/"></GrommetButtonNav>
        </div>
        <div className='navLink'>
          <GrommetButtonNav icon={<Blog />} text="Blog" path="/blog"></GrommetButtonNav>
        </div>
        <div className='navLink'>
          <GrommetButtonNav icon={<Contact />}text="Contact" path="/contact"></GrommetButtonNav>
        </div>
      </div>
    )
  }
}