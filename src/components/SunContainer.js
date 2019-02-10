import React from 'react';

const SunContainer = props => {

    const dayLength = props.sunset - props.sunrise;
    const timeNow = (new Date() / 1e3).toFixed(0);
    const dayProgress = props.sunset - timeNow;

    let sunPositionX = Math.cos((dayProgress / dayLength) * Math.PI) + 1;
    let sunPositionY = Math.sin((dayProgress / dayLength) * Math.PI);


    if(timeNow < props.sunrise) {
        sunPositionX = 0;
        sunPositionY = 0;
    } else if(timeNow > props.sunset) {
        sunPositionX = 2;
        sunPositionY = 0;
    }

    const getTime = time => {
        const options = {
            timeZone: props.timezone,
            hour    : '2-digit',
            minute  : '2-digit',
            hour12  : true
        };
        return new Date(time * 1e3).toLocaleTimeString('en', options);
    };

    const getDate = time => {
      const options = {
        timeZone: props.timezone,
        weekday : 'long',
        month   : 'long',
        day     : 'numeric'
      };
        return new Date(time * 1e3).toLocaleDateString('en', options);
    };

    const getMoon = () => {
        if(props.moon < 0.25 ){
          return <div className="moon" >
            Moon Phase: New Moon <img className="moon-img" src="./images/moon/0.svg" alt="0" />
          </div>
        } else if(props.moon >= 0.25 && props.moon < 0.5) {
          return <div className="moon" >
            Moon Phase: Waxing Crescent <img className="moon-img" src="./images/moon/0.25.svg" alt="0.25" />
          </div> 
        } else if(props.moon >= 0.5 && props.moon < 0.75 ) {
          return <div className="moon">
            Moon Phase: Full Moon <img className="moon-img" src="./images/moon/0.5.svg" alt="0.5" /> 
            Watch out for <img className="moon-img" src="./images/moon/wolf.svg" alt="wolf" /> 
          </div> 
        } else if(props.moon >= 0.75 ) {
            return <div className="moon">
              Moon Phase: Full Moon <img className="moon-img" src="./images/moon/0.5.svg" alt="0.5" /> 
              <div className="wolf">
              Watch out for <img className="wolf-img" height="30" src="./images/moon/wolf.svg" alt="wolf" /> 
              </div>
            </div> 
        }
      }
      //Moon Phase: Waning Crescent <img className="moon-img" src="./images/moon/0.75.svg" alt="0.75" />

    return <div>
      <div className="sun-block"></div>
      <div className="sun-text">
        <div className="DateNow">{getDate(timeNow)}<br></br>{getTime(timeNow)}</div>
        <span className="sunrise">
            <img src="./images/icons/sunrise.svg" alt="Sunrise" />
            <span className="sunriseTime">{getTime(props.sunrise)}</span>
        </span>
        <span className="sunset">
            <span className="sunsetTime">{getTime(props.sunset)}</span>
            <img src="./images/icons/sunset.svg" alt="Sunset" />
        </span>
        <span className="sun">
            <img
                src="./images/icons/sun.svg"
                alt="Sun"
                style={{
                    left: `calc(${sunPositionX} * 50% - 23px)`,
                    bottom: `calc((${sunPositionY} * 100%) - 12px)`
                }}
            />
        </span>
        <div className="moon-container">{getMoon()}</div>
        </div>
    </div>
}

export default SunContainer;
