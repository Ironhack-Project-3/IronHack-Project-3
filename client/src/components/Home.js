import React from 'react';
//import Thread from '../../../models/Thread';
import axios from 'axios';
import ThreadList from './threads/ThreadList';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to home page. Here will be the map and the posting board</h1>
        <div id="map" style={{width: '100%' , height: '500px'}}></div>
           <ThreadList/>
      </div>
    </div>
  )
}
export default Home;