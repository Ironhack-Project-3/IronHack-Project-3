import React from 'react'
//import Thread from '../../../models/Thread'
import axios from 'axios'
import ThreadList from './threads/ThreadList'
import Map from './Map' 
import Navbar from './Navbar'
import { ABH } from '../utils/imageUpload'
import  Card from './Navbar'

const Home = (props) => { 
  return (
  <div className="homepage"> 
    <Card />
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
            <ThreadList user={props.user}/>
      </div>
      </div>
  )
}
export default Home;