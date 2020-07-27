
import React, { useState, useEffect, Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import axios from 'axios';

const Map = () => {

 const [address, setAddress] = useState({})
  const [viewport, setViewport] = useState({
    latitude: 52.5200,
    longitude: 13.4050,
    width: "50vw",
    height: "50vh",
    zoom: 12
  });
  
  let addressInfo = []

  const getAllAddress = () =>{
    axios.get(`/api/users`)
    .then(responseFromApi => {
        setAddress(responseFromApi)
    })
  }

  useEffect(() => { 
      getAllAddress()
  }, [])

  useEffect(() => { 
    let info = address.data

    if (info) {
        info.forEach(specificAddress => {
        console.log(specificAddress.address)
        addressInfo.push(specificAddress.address)
        })
    }

    console.log("this is the address", info)
  }, [address])

  return (    
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ"
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>
    </div>
  );}

  
export default Map;

