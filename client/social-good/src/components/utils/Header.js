import React from 'react';
import {Link} from 'react-router-dom';


function Header(){

  return(
  <div className='app-container'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand">Logo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" href="#">Businesses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Meetups</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default Header;
