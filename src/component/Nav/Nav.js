import React, { Component } from 'react'

export default class Nav extends Component{
   

  
    render() {


    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav ml-auto">


          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>

        </ul>
      </nav>
    );
  }
}