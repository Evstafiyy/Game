import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">main</NavLink>
        </li>

        <li>
          <NavLink to="/films">films</NavLink>
        </li>
        <li>
          <NavLink to="/genres">genres</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
