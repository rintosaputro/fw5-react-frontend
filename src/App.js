import React, { Component } from "react";
import Home from "./pages/Home";
import NavAfterLogin from "./components/NavAfterLogin";
import NavBeforeLogin from "./components/NavBeforeLogin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleType from "./pages/VehicleType";
import VehiclePopular from "./pages/VehiclePopular";

export default class App extends Component {
  state = {
    isLogged: false
  }

  render() {
    return (
      <>
      <VehiclePopular />
      {/* <VehicleType /> */}
      {/* <ForgotPassword /> */}
      {/* <Signup /> */}
      {/* {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />} */}
      {/* {this.state.isLogged ? (<> <NavAfterLogin />  <Home /></>) : (<> <NavBeforeLogin /> <Home /> </>)} */}
      </>
    )
  }
}
