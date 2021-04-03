/* eslint-disable */
import React from 'react';

import {
  Link,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

function NavBar() {
  const {
    address,
    admin,
    minter,
    burner,
  } = useSelector((state) => state.UserReducer);
  return (
    <nav>
      <div className="nav-wrapper">
        <a
          href="#"
          className="brand-logo"
          style={{
            paddingLeft: '1em',
          }}
        >
          Bike Rent!
        </a>
        <ul
          id="nav-mobile"
          className="right hide-on-med-and-down"
          style={{
            paddingRight: '1em',
          }}
        >
          <li>
            <Link to="/">
              <span>
                <i className="material-icons">
                  home
                </i>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/create-bike">
              Register Bike
            </Link>
          </li>
          <li>
            <Link to="/rent-bike">
              Rent a bike
            </Link>
          </li>
          <li>
            <Link to="/my-bikes">
              My Bikes
            </Link>
          </li>
          <li>
            <Link to="/my-rentals">
              My rentals
            </Link>
          </li>
          <li>
            Hola!&nbsp;
            { address }
          </li>
          {admin && (
            <li>
              &nbsp;Sos admin!
            </li>
          )}
          {minter && (
            <li>
              Sos minter!
            </li>
          )}
          {burner && (
            <li>
              Sos burner!
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
