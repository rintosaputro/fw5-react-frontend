import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";

export default class App extends Component {
  state = {
    isLogged: false
  }

  render() {
    return (
      <>
      {/* <Signup /> */}
      {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />}
      {this.state.isLogged && <Home />}
      </>
    )
  }
}
