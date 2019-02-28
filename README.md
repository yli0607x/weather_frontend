# Weather.com
![](weather.gif)

## Introduction

This is the repo for the Flatiron School Mod 4 Project. Weather.com is a easy-to-use site to search for current weather conditions, 3-day forecast, sunrise and sunset, as well as clothing suggestions. It also allow you to add or delete cities in your list. 

## Features 
- Google Map of searched city
- List of saved cities
- 3-day forecast 
- switch between celcius and fahrenheit 
- display sunrise, sunset and moon
- recommend what clothes to wear
- app background changes with current weather
![](weather_features.gif)

## Install Instructions

#### Backend (https://github.com/yli0607x/weather_backend)
```sh
$ git clone git@github.com:yli0607x/weather_backend.git
$ cd weather_backend
$ bundle install
$ rails s -p 3000
```

#### Frontend
```sh
$ git clone git@github.com:yli0607x/weather_frontend.git
$ cd weather_frontend
$ npm install 
$ npm start
```

## API Keys 
Get the API keys from [Google](https://developers.google.com/maps/documentation/javascript/get-api-key) and [Dark Sky](https://darksky.net/dev).
Create .env in the project root and update file with the following content:

REACT_APP_API_KEY_GL = INSERT_YOUR_GOOGLE_API_KEY<br>
REACT_APP_API_KEY_DS = INSERT_YOUR_DARKSKY_API_KEY


## Technologies Used
- react
- react-google-maps
- darksky API
