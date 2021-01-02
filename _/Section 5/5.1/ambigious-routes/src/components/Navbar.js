import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <li>
        <Link to="/about">About (static)</Link>
      </li>
      <li>
        <Link to="/contact">Contact (static)</Link>
      </li>
      <li>
        <Link to="/company">Company (static)</Link>
      </li>
      <li>
        <Link to="/jane">Jane (dynamic)</Link>
      </li>
      <li>
        <Link to="/John">John (dynamic)</Link>
      </li>
    </div>
  );
}
export default Navbar;
