import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ isLoggedIn }) {
  return (
    <nav>
      <ul>
        <li><Link to="/search">Search for Books</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/saved">See My Saved Books</Link></li>
            <li><LogoutButton /></li>
          </>
        ) : (
          <li><Link to="/login">Login/Signup</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Menu;
