import React from 'react';
import { Link } from 'react-router-dom';
import * as Props from './props';

const Navbar = (props) => {
  const { title } = props;
  return (
    <div className="p-4 text-center">
      <h1 className="text-white">{title}</h1>
      <Link to="/about" className="text-white">About</Link>
    </div>
  );
};

Navbar.propTypes = Props.propTypes;
Navbar.defaultProps = Props.defaultProps;

export default Navbar;