import React, { Component } from 'react';
import '../style/header.css'
import Menu from './menu'
import {Link} from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1 className="title"><Link className="linker" to='/'>Minimaliste moderne</Link></h1>
          <Menu/>
      </div>
    );
  }

}

export default Header;
