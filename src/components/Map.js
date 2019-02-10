import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) =>{

  
  return (
      <GoogleMap
        defaultZoom={13}
        center={ props.location }
        
        >
      </GoogleMap>
    )
  }
))

export default Map
