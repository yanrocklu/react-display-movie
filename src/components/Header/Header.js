import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="container">
    <div className="headerTitle">
      <img className="titleIcon" src="https://img.icons8.com/wired/50/000000/film-reel.png" alt="film icon"/>
      <div>{props.title}</div>
    </div>

  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;