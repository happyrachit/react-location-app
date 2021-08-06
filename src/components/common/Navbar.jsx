import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/#">
            React App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                  <NavLink
                    to="/Companies"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Company
                  </NavLink>
                </li>

            </ul>
          </div>
        </nav>
      </>
    )
}

export default Navbar
