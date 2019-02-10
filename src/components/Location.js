import React, { Component } from 'react'

class Location extends Component {

  render() {
    //console.log("inside location prop", this.props)
    //console.log("inside location", this.props.location.id)
    //console.log("inside location", this.props.editClicked)
    return (

      <div >
        <div className="location-name" onClick={(event)=>this.props.handleClickCity(event, this.props.location.name)}>{this.props.location.name}
        {this.props.editClicked ? <button className="button" onClick={(event)=>this.props.handleDeleteCity(event, this.props.location.id)}>delete</button> : null}
        </div>  
      </div>
    )
  }
}

export default Location