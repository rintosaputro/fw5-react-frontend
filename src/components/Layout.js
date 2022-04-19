/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import NavAfterLogin from './Navbar/NavAfterLogin';
import NavBeforeLogin from './Navbar/NavBeforeLogin';
import NavPopular from './Navbar/NavPopular';
import Footer from './Footer';

function Layout(props) {
  const {
    noNavbar, signup, vehicleMore, children,
  } = props;
  const { auth } = useSelector((state) => state);

  return (
    <div>
      {!noNavbar
      && (vehicleMore ? <NavPopular /> : (auth.token ? <NavAfterLogin /> : <NavBeforeLogin />))}
      {children}
      {!signup && <Footer />}
    </div>
  );
}
export default Layout;
