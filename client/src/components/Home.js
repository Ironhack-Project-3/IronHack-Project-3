import React from 'react';
//import Thread from '../../../models/Thread';
import axios from 'axios';
import ThreadList from './threads/ThreadList';
import Map from './Map'
import Navbar from './Navbar'


const Home = () => {
  return (
  <div className="homepage"> 
    <Navbar /> 
    <h1 className="homepage-header">Temp header home</h1>

    <img src='../public/images/layout.jpg'/>
      
    <div className="map-container">
      <div className="mapbox">

        <p><Map/></p>
      </div>
    </div>
      <div className="homepage-threads">
            <ThreadList/>
      </div>
      </div>
  )
}
export default Home;