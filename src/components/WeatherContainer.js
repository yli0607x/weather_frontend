import React, { Component } from 'react'
import '../App.css';
import WeatherNow from '../components/WeatherNow';

class WeatherContainer extends Component {


  render() {
      //console.log("inside weather container", this.props.weather)
      
    return (
      <div >
       <WeatherNow Celsius={this.props.Celsius} weather={this.props.weather} city={this.props.city}/>
      </div> 
    )
  }
}

export default WeatherContainer