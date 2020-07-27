
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.5200,
    longitude: 13.4050,
    width: "50vw",
    height: "50vh",
    zoom: 12
  });

  console.log(viewport)
  
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

