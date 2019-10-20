import React from 'react';
import './Header.css';
// 'npm install --save prop-types' if want to use PropTypes
// import PropTypes from 'prop-types';

const Header = props => (
  <div className="container">
    <div className="headerTitle">
      <img className="title-icon" src="https://img.icons8.com/wired/50/000000/film-reel.png" alt="filem icon"/>
      <div>{props.title}</div>
    </div>
  </div>
);

// Header.propTypes = {
//   name: PropTypes.string
// };

export default Header;