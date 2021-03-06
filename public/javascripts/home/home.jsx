import React from 'react';
import { Component } from 'react';
// import $ from 'zepto';

import { Link } from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-main">
        Home page ~ <br /><br /><br />
        <Link to="/flight" >Flights</Link><br /><br /><br /><br />
        <Link to="/hotel" >Hotel</Link><br /><br /><br /><br />
        <Link to="/train" >Train</Link><br /><br /><br /><br />
      </div>
    );
  }
}

export default Home;
