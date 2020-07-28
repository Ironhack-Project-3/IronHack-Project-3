import React, { useState, useEffect, Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Pin from "./Pin"
import axios from 'axios';

const convertAddress=(address)=>{
  let token="pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ"
 let url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&access_token=${token}`
    return axios.get(url).then(response => {
      return response.data.features[0].center
 }).catch(err=>{console.log(err)})

}
const Map = () => {

 const [address, setAddress] = useState([])
  const [viewport, setViewport] = useState({
    latitude: 52.5200,
    longitude: 13.4050,
    width: "50vw",
    height: "50vh",
    zoom: 12
    // <div id="map" style = 'width: 100%; height: 500px;' ></div>
  });
  
  let addressInfo = []

  let coordinates = addressInfo.map(elem => {
    return convertAddress(elem)
  })


  const getAllAddress = () =>{
    axios.get(`/api/users`)
    .then(responseFromApi => {
        let coordinates = responseFromApi.data.map(user=>{
          console.log(user)
          return convertAddress(user.address)
        })
        Promise.all(coordinates).then(cords=>{
          console.log(cords)
          setAddress(cords)
        })
    })
  }

  useEffect(() => { 
      getAllAddress()
  }, [])


  useEffect(()=>{
console.log(address,"recognize me")
  },[address])

  useEffect(() => { 
    let info = address.data

    if (info) {
        info.forEach(specificAddress => {
        addressInfo.push(specificAddress.address)
        })
    }

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

{address.map(location => {
  console.log(location)
               return  <Marker 
                  key={location._id}
                  longitude={ location[0] }
                  latitude={ location[1] }
                  >
                   <Pin size={5} />

                   {/* <button class="marker-btn">
                    <img src = { sunset.img } alt="sunset icon" />
                   </button> */}
                   
                   {/* <Link to={`/spotdetails/${sunset._id}`}>
                   <img className="marker-btn-img" src = { sunset.img } alt="sunset icon" />
                  </Link> */}
                </Marker>
}

            )}


      </ReactMapGL>

    </div>
  );}

  
export default Map;

