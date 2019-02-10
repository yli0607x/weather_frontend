import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Login extends React.Component {

  state={
    user:""
  }

  handleChange = (event) => {
    this.setState({user: event.target.value})
  }

  render() {
    console.log("inside login", this.state.user)
    return (
      <div>
        <div>
          <header>
            <div>
              <form onSubmit={event => this.props.handleSubmit(event, this.state.user)} >
                <input type="text" placeholder="Name" onChange={this.handleChange}/>
                  &nbsp;
                <input type="password" placeholder="Password"/>
                <NavLink to='/weather' > 
                  <button className="button">Login</button>
                </NavLink>
              </form>
            </div>
          </header>
        </div>
        <div className="circle-background">
          <video className="circle-video" loop autoPlay preload >
            <source src="./images/circle.mp4" type="video/mp4" />
          </video>
        </div> 
      </div>
    )    
  }
}

export default Login;


// (
//   <div >
//     Login
//     <form >
//       <div className="row">
//         <div className="col-6">
//           <input type="text" className="form-control" placeholder="first name"/><br />
//           <input type="text" className="form-control" placeholder="last name"/>
//         </div>
//         <div className="col-6">
//           <input type="text" className="form-control" placeholder="email"/><br />
//           <input type="password" className="form-control" placeholder="password"/>
//         </div>
//         <NavLink to='/weather' style={{position: 'fixed', top: '65%', buttom:'20%', left: '49%'}}>
//           <button style={{color: '#FF69B4'}}>Login</button>
//         </NavLink>
//       </div>
//     </form>
//   </div>
// )