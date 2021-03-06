import React, { Component } from 'react'
import '../App.css';
import Map from "./Map";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
class MapContainer extends Component {


  render() {
      //console.log("inside weather container", this.props.weather)
      
    return (
      <div >
        <Map
        location={{lat: this.props.latitude, lng: this.props.longitude}}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `45vh`, width: `24vw` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
       
      </div> 
    )
  }
}

export default MapContainer