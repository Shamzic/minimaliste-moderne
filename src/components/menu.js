import React, { Component } from 'react';
import '../style/menu.css'
import {Link} from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
      <ul className="menu">
        <Link className="linker" to="/postslist"><li>Liste des articles</li></Link>
        <Link className="linker" to="/addpost"><li>Ajouter un article</li></Link>
        <Link className="linker" to="/categorieslist"><li>Catégories</li></Link>
        <Link className="linker" to="/info"><li>A propos</li></Link>
      </ul>
    );
  }

}

export default Menu;
