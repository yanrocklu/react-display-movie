import React from 'react';
import './Home.css';

const Home = () => (
  <div className="homeContainer">
    <h2 className="homeTitle">Welcome to React Movie Show</h2>
    <div className="homeText">
      You can navigate between the header tabs, which will display the movie list as select list, or tiles
    </div>
  </div>
);

export default Home;