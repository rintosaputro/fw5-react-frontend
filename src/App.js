import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleType from "./pages/VehicleType";

export default class App extends Component {
  state = {
    isLogged: false
  }

  render() {
    return (
      <>
      <VehicleType />
      {/* <ForgotPassword /> */}
      {/* <Signup /> */}
      {/* {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />}
      {this.state.isLogged && <Home />} */}
      </>
    )
  }
}
