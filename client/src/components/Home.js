import React from 'react'
//import Thread from '../../../models/Thread'
import axios from 'axios'
import ThreadList from './threads/ThreadList'
import Map from './Map'
import Navbar from './Navbar'
import { ABH } from '../utils/imageUpload'


const Home = () => {
  return (
  <div className="homepage"> 
    <Navbar /> 
    <div className="abh-container">
    <img className="abh" src={ABH}/>
    </div>


    <h1 className="homepage-header"></h1>
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