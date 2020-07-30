import React, { useState, useEffect, Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Pin from "./Pin";
import axios from "axios";
import mapboxgl from "mapbox-gl"

const convertAddress = (address) => {
  let token =
    "pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ";
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&access_token=${token}`;
  return axios
    .get(url)
    .then((response) => {
      return response.data.features[0].center;
    })
    .catch((err) => {
      console.log(err);
    });
};
const Map = () => {
  const [address, setAddress] = useState([]);
  const [viewport, setViewport] = useState({
 
    latitude: 52.5200,
    longitude: 13.4050,
    width: "200vh",
    height: "30vh",
    zoom: 10 
  });

  let addressInfo = [];

  let coordinates = addressInfo.map((elem) => {
    return convertAddress(elem);
  });


  const getAllAddress = () => {
    axios.get(`/api/users`).then((responseFromApi) => {
      let coordinates = responseFromApi.data.map((user) => {
        return convertAddress(user.address);
      });
      Promise.all(coordinates).then((cords) => {
        setAddress(cords);
      });
    });
  };

  useEffect(() => {
    getAllAddress();
  }, []);

  useEffect(() => {
  }, [address]);

  useEffect(() => {
    let info = address.data;

    if (info) {
      info.forEach((specificAddress) => {
        addressInfo.push(specificAddress.address);
      });
    }
  }, [address]);
   

  // var map = new mapboxgl.Map({
  //   container: 'map', // container id
  //   style: 'mapbox://styles/mapbox/streets-v11', //stylesheet location
  //   center: [-122.65, 45.52], // starting position
  //   zoom: 9 // starting zoom
  //   });
     
  //   // disable map zoom when using scroll
  //   Map.scrollZoom.disable();

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ"
        mapStyle="mapbox://styles/racheldlt/ckd8ugjbx131v1imp0vnj1vvz"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {address.map((location) => {
          console.log(location);
          if(location)
          return (
            <Marker
              key={location._id}
              longitude={location[0]}
              latitude={location[1]}
            >
              <Pin size={5} />
            </Marker>
          );
        })}

      </ReactMapGL>

    </div>
    
  );
};

export default Map;
