import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
return (
  <div className="headers">

      <nav className="navbarReduce navbar fixed-top  navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav container col-md ml-auto">
          <NavLink className="navbar-brand" to="/">
            <div className="d-inline-block align-top crestBug">
            </div>
           <span className= "businame"> Dellwood Apartment </span>
          </NavLink>
        </div>


        <div className="collapse navbar-collapse navbar-expand-lg" id="navbarNav">
          <div className="navbar-nav container col-md-7 ml-auto">
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/">Feature</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="Floor">Floor Plans</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="Leasing">Leasing Info</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="Location">Location</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="Price">Price</NavLink>
          </div>
            <div className="navbar-nav  col-md ml-auto ">

            </div>
        </div>

      </nav>
    </div>
  );
};

export default Nav;
