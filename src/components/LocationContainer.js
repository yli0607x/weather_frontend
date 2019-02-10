import React, { Component } from 'react'
import '../App.css';
import Location from './Location';

class LocationContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      editClicked: false 
    }
  } 

  handleEditClicked = event => {  
      event.preventDefault()
      this.setState({
          editClicked: !this.state.editClicked
      }) 
  }

  renderOneLocation = () => {
    return this.props.locations.map(location => (
      <Location location={location} key={location.id} editClicked={this.state.editClicked} handleClickCity={this.props.handleClickCity} handleDeleteCity={this.props.handleDeleteCity}/>
    ))
  }
  // {this.renderOneLocation()}
  //onClick={this.handleEditClicked()}
  render() {
    //console.log("inside container props", this.props.locations)
    //console.log(this.state.editClicked)
    return (
      
        <div>
          <div className="location-block"></div>
          <div className="location-text">
            <strong>My Locations</strong>
            <button className="button" onClick={this.handleEditClicked}>Edit</button>
            <hr></hr>
            {this.renderOneLocation()}
          </div>
        </div>
      
    

    )
  }
}

export default LocationContainer