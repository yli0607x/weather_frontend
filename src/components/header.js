import React, { Component } from 'react';
import Login from '../Login'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      searchTerm: null,
      user: ""
    }
  }

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.handleLocationSearch(this.state.searchTerm)
    // this.props.handleSetUser(this.state.user)
  }
  
  handleSubmit = (event, name) => {
    event.preventDefault();
    this.setState({ user: name})
  }


  render() {
    //console.log("inside header props", this.props)
    //console.log("inside header user", this.state.user)
    return ( 
    <header>
      <div>
        <form onSubmit={ this.handleFormSubmit }>
          <input
            type="text"
            placeholder="Search by city"
            onChange={this.handleInputChange}
          />
        <button className="button" type="submit">Submit</button>  
        </form>
      </div>
    </header> 
    )
  }
}

export default Header;
