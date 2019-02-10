import React from 'react';
//import SunCycle from './suncycle';

const WeatherNow = props => {
  const icon_URL = "./images/icons/" + props.weather.currently.icon + ".svg";
  let tempNow;
  let tempMin;
  let tempMax;

  if(props.Celsius) {
    tempNow = props.weather.currently.temperature.toFixed(0);
    tempMin = props.weather.daily.data[0].temperatureLow.toFixed(0);
    tempMax = props.weather.daily.data[0].temperatureHigh.toFixed(0);
  } else {
    tempNow = (props.weather.currently.temperature * 1.8 + 32).toFixed(0);
    tempMin = (props.weather.daily.data[0].temperatureLow * 1.8 + 32).toFixed(0);
    tempMax = (props.weather.daily.data[0].temperatureHigh * 1.8 + 32).toFixed(0);
  }



  return <div >
    <div className="todayInfo">
    <div><strong>Today in {props.city}</strong></div>
    <div >{ tempMin } / { tempMax }&deg;{ props.Celsius ? "C" : "F" }</div>
    <div>{ props.weather.currently.summary }</div>
    </div>
    <div className="tempNow">{ tempNow }&deg;{ props.Celsius ? "C" : "F" }</div>
    <img className="todayIcon" height="80" src={ icon_URL } alt={ props.weather.currently.icon } />
    <div>{ props.weather.hourly.summary }</div>
    <hr />

  </div>;
};

export default WeatherNow;
