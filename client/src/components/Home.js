import React from 'react';
//import Thread from '../../../models/Thread';
import axios from 'axios';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to home page this is our map and posting board!</h1>
        <div id="map" style={{width: '100%' , height: '500px'}}></div>
      </div>
    </div>
  )
}
export default Home;