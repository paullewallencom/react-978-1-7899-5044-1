import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Sep = () => <span> | </span>;

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/catalog">Catalog</Link> <Sep />
      <Link to="/profile">Profile</Link> <Sep />
      <Link to="/about">About</Link> <Sep />
      <hr/>
    </div>
  )
}