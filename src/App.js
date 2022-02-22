import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default class App extends Component {
  state = {
    isLogged: false
  }

  render() {
    return (
      <>
      {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />}
      {this.state.isLogged && <Home />}
      </>
    )
  }
}
