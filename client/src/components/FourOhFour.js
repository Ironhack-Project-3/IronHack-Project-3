import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Four from '../images/Four.png';

export default class FourOhFour extends Component {
  render() {
    return (
      <div className="four">
        <img src={Four}  />
            <p style={{textAlign:"center"}}>
              <Link to="/home">Go to Home </Link>
            </p>
      </div>
    )
  }
}
