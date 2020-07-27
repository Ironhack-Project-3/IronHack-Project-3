
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.5200,
    longitude: 13.4050,
    width: "50vw",
    height: "50vh",
    zoom: 12
  })};

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>
    </div>
  );
  

export default Map;

