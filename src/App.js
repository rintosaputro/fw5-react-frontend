import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleType from "./pages/VehicleType";
import VehicleMore from "./pages/VehicleMore";
import VehicleDetail from "./pages/VehicleDetail";
import Reservation from "./pages/Reservation";
import History from "./pages/History";
import Payment from "./pages/Payment";

export default class App extends Component {
  state = {
    isLogged: true,
    moreDetail: ''
  }

  render() {
    const {isLogged} = this.state

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout isLogin={isLogged}><Home /></Layout>
          } />
          <Route path="login" element={
            <Layout noNavbar={true}><Login /></Layout>
          } />
          <Route path="forgot-password" element={
            <Layout noNavbar={true}><ForgotPassword /></Layout>
          } />
          <Route path="signup" element={
            <Layout noNavbar={true} signup={true}><Signup /></Layout>
          } />
          <Route path="vehicle/type" element={
            <Layout isLogin={isLogged}><VehicleType /></Layout>
          } />
          <Route path={`vehicle`} element={
            <Layout isLogin={isLogged} vehicleMore={true}><VehicleMore /></Layout>
          } />
          <Route path="vehicle/:id" element={
            <Layout isLogin={isLogged}><VehicleDetail /></Layout>
          } />
          <Route path="reservation/:id" element={
            <Layout isLogin={isLogged}><Reservation /></Layout>
          } />
          <Route path="payment/:id" element={
            <Layout isLogin={isLogged}><Payment /></Layout>
          } />
          <Route path="history" element={
            <Layout isLogin={isLogged}><History /></Layout>
          } />
        </Routes>
        {/* {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />} */}
        {/* {this.state.isLogged ? (<> <NavAfterLogin />  <Home /></>) : (<> <NavBeforeLogin /> <Home /> </>)} */}
      </BrowserRouter>
    )
  }
}
