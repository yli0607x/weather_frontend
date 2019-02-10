import React from 'react';

const MemoContainer = props => {
  console.log("inside memo",props.weather)

    const showTShirt = () => {
      if(props.weather.temperature >= 24 ) {
        return <div className="item"><img className="t-shirt" src="./images/memos/t-shirt.svg" alt="t-shirt" /></div>
      } 
    }
    const showFlipFlops = () => {
      if(props.weather.temperature >= 24 ) {
        return <div className="item"><img className="flip-flops" src="./images/memos/flip-flops.svg" alt="flip-flops" /></div>
      } 
    }
    const showHoodie = () => {
      if(props.weather.temperature < 24 && props.weather.temperature > 15 ) {
        return <div className="item"><img className="hoodie" src="./images/memos/hoodie.svg" alt="hoodie" /></div>
      }
    }
    const showCoat = () => {
      if(props.weather.temperature <= 15){
        return <div className="item"><img className="coat" src="./images/memos/coat.svg" alt="coat" /></div>
      }  
    }
    const showIceCream = () => {
      if(props.weather.temperature >= 32 ) {
        return <div className="item"><img className="ice-cream" src="./images/memos/ice-cream.svg" alt="ice-cream" /></div>
      }
    }
    const showUmbrella = () => {
      if(props.weather.precipType){
        return <div className="item"><img className="umbrella" src="./images/memos/umbrella.svg" alt="umbrella" /></div>
      }  
    }
    const showBoots = () => {
      if(props.weather.precipType){
        return <div className="item"><img className="boots" src="./images/memos/boots.svg" alt="boots" /></div>
      }  
    }
    const showSunglasses = () => {
      if(props.weather.uvIndex >2 ){
        return <div className="item"><img className="sunglasses" src="./images/memos/sunglasses.svg" alt="sunglasses" /></div>
      }  
    }
    const showSunBlock = () => {
      if(props.weather.uvIndex >2 ){
        return <div className="item"><img className="sun-block" src="./images/memos/sun-block.svg" alt="sun-block" /></div>
      }  
    }
    const showCap = () => {
      if(props.weather.temperature < 5 ){
        return <div className="item"><img className="cap" src="./images/memos/cap.svg" alt="cap" /></div>
      }  
    }
    const showMittens = () => {
      if(props.weather.temperature < 5 ){
        return <div className="item"><img className="mittens" src="./images/memos/mittens.svg" alt="mittens" /></div>
      }  
    }

    const showScarf = () => {
      if(props.weather.temperature < 5 ){
        return <div className="item"><img className="scarf" src="./images/memos/scarf.svg" alt="scarf" /></div>
      }  
    }

    const getPrecipitation = () => {
      
        if(props.weather.precipType === "snow"){
          return <div>
            There is a {(props.weather.precipProbability * 100).toFixed(0)}% chance of {props.weather.precipType }&nbsp;
            <br></br>
            Remember to bundle up!  
          </div>
        } else if(props.weather.precipType === "rain") {
          return <div>
            There is a {(props.weather.precipProbability * 100).toFixed(0)}% chance of {props.weather.precipType }&nbsp;
            <br></br>
            Remember to bring umbrella!
        </div>  
      }
    }
    
    const getHumidity = () => {
      return <div>
        Humidity is {(props.weather.humidity * 100).toFixed(0)}%
      </div>
    }

    const getWind = () => {
      if(props.weather.windSpeed <= 10 ){
        return <div>
          It's not windy today. Wind speed is at {props.weather.windSpeed} kph.
        </div>
      } else if(props.weather.windSpeed > 10 && props.weather.windSpeed <= 25) {
        return <div>
          It's breezy today. Wind speed is at {props.weather.windSpeed} kph.
        </div> 
      } else if(props.weather.windSpeed > 25 ) {
        return <div>
          It's very windy today. Wind speed is at {props.weather.windSpeed} kph.
        </div> 
      }
    }

    const getUV = () => {
      if(props.weather.uvIndex <=2 ){
        return <div>
          UV Index is {props.weather.uvIndex}(low).  
        </div>
      } else if(props.weather.uvIndex > 2 && props.weather.uvIndex <= 5) {
        return <div>
          UV Index is {props.weather.uvIndex}(moderate). Remember to wear sunglasses. 
        </div> 
      } else if(props.weather.uvIndex > 5 ) {
        return <div>
          UV Index is {props.weather.uvIndex}(high). Remember to wear sunblock.
        </div> 
    }
    }

    return <div>
        <div className="memo-block">
        </div>
        <div className="memo-text">
          <strong>Hello Yuli</strong>
          <br></br><br></br>
          {getPrecipitation()}
          {getWind()}
          {getUV()}
        </div>
        <div className="grid-container">
            {showTShirt()}
            {showHoodie()}
            {showCoat()}
            {showIceCream()}
            {showUmbrella()}
            {showSunglasses()}
            {showCap()}
            {showMittens()}
            {showScarf()}
            {showBoots()}
            {showSunBlock()}
            {showFlipFlops()}

        </div>
    </div>
}

export default MemoContainer;
