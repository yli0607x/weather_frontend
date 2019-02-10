import React, { Component } from 'react';
import './App.css';
import LocationContainer from './components/LocationContainer';
import WeatherContainer from './components/WeatherContainer';
import MapContainer from './components/MapContainer';
import SunContainer from './components/SunContainer';
import MemoContainer from './components/MemoContainer';
import Header from './components/header';

const API = "http://localhost:3000/api/locations"
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


class App extends Component {
  
  state = { 
      weather:[], 
      latitude: "40.7047751", 
      longitude: "-74.013277", 
      locations: "",
      city: "", 
      isLoaded: false, 
      Celsius: true, 
      name: "",
      memo: "",
    user:"" }
  
  

  componentDidMount(){
    fetch(API)
      .then(r=>r.json())
      .then(locationArray=>{
        this.setState({
          locations: locationArray
        })
      })
  }

  handleUnitChange = event => {
    event.preventDefault()
    this.setState({
        Celsius: !this.state.Celsius
    })
  }

  fetchWeather = () => {
		fetch(
			`http://localhost:3000/api/weather?latitude=${this.state.latitude}&longitude=${this.state.longitude}`
		)
			.then(res => res.json())
			.then(weather => {
				this.setState({ 
          weather: weather,
          isLoaded: true,
          memo: weather.currently
        })
      })
  
	}

  handleLocationSearch = (name) => {
    let GoogleApi = "https://maps.googleapis.com/maps/api/geocode/json?address="
        GoogleApi += name + `&key=${API_KEY}`
        //todo change to env
    fetch(GoogleApi)
      .then(r => r.json())
      .then(cityJSON => {
        this.setState({
          latitude: cityJSON.results[0].geometry.location.lat,
          longitude: cityJSON.results[0].geometry.location.lng,
          city: cityJSON.results[0].address_components[0].long_name
        }, ()=> {
          this.fetchWeather()
        })
      })
  }

  getDate = time => {
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: this.state.weather.timezone
    }
    return new Date(time * 1e3).toLocaleDateString('en', options);
  }
  
  getForecast = date => {
    let { icon, time, temperatureLow, temperatureHigh, summary } = this.state.weather.daily.data[date]
    const icon_URL = "./images/icons/" + icon + ".svg"
    if(!this.state.Celsius) {
        temperatureLow = temperatureLow * 1.8 + 32
        temperatureHigh = temperatureHigh * 1.8 + 32
    }
    return <div>
        <button className="detail-button" onClick={this.handleDetails} id={date} >Details</button> 
        <div className="icon">
            <img height="80" src={icon_URL} alt="icon"/>
        </div>
        <div className="date">{ this.getDate(time) }</div>
        <div className="tToday">
            {temperatureLow.toFixed(0)}&deg;
            /&nbsp;
            {temperatureHigh.toFixed(0)}&deg;
            {this.state.Celsius ? "C" : "F" }
        </div>
        <div className="forecastSummary">{summary}</div>
        <hr />
    </div>
  }

  handleDetails = (event) => {
   //console.log(event.target.id)
  //  debugger
    if (this.state.weather){
      this.setState({
        memo: this.state.weather.daily.data[event.target.id]
      })
    } 
  }
  
  handleClickCity = (event, name) => {
    this.handleLocationSearch(name)
  }
  
  // handleAddCityInState = (name) => {
  //   let locations = [...this.state.locations, {name: this.state.city}]
  //   this.setState({ locations })
  // }

  handleAddCity = () => {
    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.city
      })
    })
    .then(r => r.json())
    // .then(console.log)
    .then(newCityObject => {
      this.setState({ locations: [...this.state.locations, newCityObject]}, ()=>console.log(newCityObject))
    })
  
  }
  
  handleDeleteCity = (event, id) => {
    let locations = this.state.locations.filter(location => location.id !== id)
    this.setState({locations})
    fetch(`http://localhost:3000/api/locations/${id}`, {method: 'DELETE'})
  }
  
  getURL = () => {
    return "./images/backgrounds/" + this.state.weather.currently.icon + ".jpg"  
  }

  handleEnterName = (event) => {
    this.setState({name: event.target.value })
  }

  handleSetUser = (name) => {
    this.setState({user: name})
  }
 
  

  render() {
    //console.log("in app lat", this.state.latitude)
    //console.log("in app", this.state.city)
    //console.log("in app", this.state.weather)
    //console.log(this.state.locations)
    //console.log(this.props)
    return this.state.isLoaded ?
      <div className="AppContainer" style={{backgroundImage: `url(${this.getURL()})`, backgroundSize: `cover`}} > 
        <div>
        <Header handleSetUser={this.handleSetUser} memo={this.state.memo} handleLocationSearch={this.handleLocationSearch} latitude={this.state.latitude} longtitude={this.state.longitude}/>
          <div className="MapContainer">   
            <MapContainer city={this.state.city} latitude={this.state.latitude} longitude={this.state.longitude} />
          </div>
          <div className="LocationContainer">  
            <LocationContainer handleDeleteCity={this.handleDeleteCity} handleClickCity={this.handleClickCity} locations={this.state.locations}/>
          </div>
          <div className="WeatherContainer"> 
            <div className="weather-block"></div>
            <div className="weather-text">
              <button className="button" onClick={ event => this.handleUnitChange(event) }>
                Switch to &deg;{ this.state.Celsius ? "F" : "C" }
              </button>
              <button className="button" onClick={this.handleAddCity}>Add to list</button>  
              <WeatherContainer Celsius={ this.state.Celsius } weather={this.state.weather} city={this.state.city} />
              <div className="rightPanel">
                <div className="dailyWeather">{ this.getForecast(1) }</div>
                <div className="dailyWeather">{ this.getForecast(2) }</div>
                <div className="dailyWeather">{ this.getForecast(3) }</div>
              </div>
            </div> 
          </div>
          <div className="SunContainer">
            <SunContainer moon={this.state.weather.daily.data[0].moonPhase}sunrise={this.state.weather.daily.data[0].sunriseTime} sunset={this.state.weather.daily.data[0].sunsetTime} timezone={this.state.weather.timezone}/>
          </div>
          <div className="MemoContainer">
            <MemoContainer weather={this.state.memo} name={this.state.name} Celsius={this.state.Celsius}/>
          </div>  
        </div>  
      </div> :
      <div>
        <Header handleLocationSearch={this.handleLocationSearch} latitude={this.state.latitude} longtitude={this.state.longitude} city={this.state.city}/>
        <video className="background-video" loop autoPlay >
                <source src="./images/star.mp4" type="video/mp4" />
        </video>
      </div>
  }
}

export default App;
