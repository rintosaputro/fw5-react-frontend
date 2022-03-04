import React, { Component, useEffect, useState } from "react";
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
import Profile from "./pages/Profile";
import Search from "./pages/Search";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="login" element={
            <Layout noNavbar><Login /></Layout>
          } />
          <Route path="forgot-password" element={
            <Layout noNavbar><ForgotPassword /></Layout>
          } />
          <Route path="signup" element={
            <Layout noNavbar signup><Signup /></Layout>
          } />
          <Route path="vehicle/type" element={
            <Layout><VehicleType /></Layout>
          } />
          <Route path={`vehicle`} element={
            <Layout vehicleMore><VehicleMore /></Layout>
          } />
          <Route path="vehicle/:id" element={
            <Layout><VehicleDetail /></Layout>
          } />
          <Route path="reservation/:id/:qty" element={
            <Layout><Reservation /></Layout>
          } />
          <Route path="payment/:id/:qty/:idHistory" element={
            <Layout><Payment /></Layout>
          } />
          <Route path="history" element={
            <Layout><History /></Layout>
          } />
          <Route path="profile/:idUser" element={
            <Layout><Profile /></Layout>
          } />
          <Route path={`search`} element={
            <Layout><Search /></Layout>
          } />
        </Routes>
        {/* {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />} */}
        {/* {this.state.isLogged ? (<> <NavAfterLogin />  <Home /></>) : (<> <NavBeforeLogin /> <Home /> </>)} */}
      </BrowserRouter>
    )
  }
}

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={
//           <Layout ><Home /></Layout>
//         } />
//         <Route path="login" element={
//           <Layout noNavbar={true}><Login /></Layout>
//         } />
//         <Route path="forgot-password" element={
//           <Layout noNavbar={true}><ForgotPassword /></Layout>
//         } />
//         <Route path="signup" element={
//           <Layout noNavbar={true} signup={true}><Signup /></Layout>
//         } />
//         <Route path="vehicle/type" element={
//           <Layout ><VehicleType /></Layout>
//         } />
//         <Route path={`vehicle`} element={
//           <Layout  vehicleMore={true}><VehicleMore /></Layout>
//         } />
//         <Route path="vehicle/:id" element={
//           <Layout ><VehicleDetail /></Layout>
//         } />
//         <Route path="reservation/:id/:qty" element={
//           <Layout ><Reservation /></Layout>
//         } />
//         <Route path="payment/:id/:qty/:idHistory" element={
//           <Layout ><Payment /></Layout>
//         } />
//         <Route path="history" element={
//           <Layout ><History /></Layout>
//         } />
//         <Route path="profile/:idUser" element={
//           <Layout ><Profile /></Layout>
//         } />
//         <Route path={`search`} element={
//           <Layout ><Search /></Layout>
//         } />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;
