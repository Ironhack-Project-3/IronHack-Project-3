import React from 'react';
//import Thread from '../../../models/Thread';
import axios from 'axios';
import ThreadList from './threads/ThreadList';
import Map from './Map'

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to home page. Here will be the map and the posting board</h1>
           <ThreadList/>
           <Map/>
      </div>
    </div>
  )
}
export default Home;