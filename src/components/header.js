import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className='header'>
          <Link className='header-nav' to='/'>Welcome!</Link>
          <Link className='header-nav' to='/groceries'>Shop Groceries</Link>
          <Link className='header-nav' to='/appliances'>Shop Appliances</Link>
          <Link className='header-nav' to='/cart'>YourCart({this.props.cartCount})</Link>
        </div>
    );
  }
} export default Header;