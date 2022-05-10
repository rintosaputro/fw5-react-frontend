/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import '../assets/css/profile.css';
import { BsFillPenFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import deleteActiveNav from '../helper/deleteActiveNav';
import noImage from '../assets/images/no-pp.jpg';
import handleImg from '../assets/images/defaultPict.png';
import BtnLogout from '../components/BtnLogout';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { updateProfile as updated } from '../redux/actions/user';
import { getUser } from '../redux/actions/auth';
import { checkEmail, checkPhone } from '../helper/check';

export default function Profile() {
  const [checked, setChecked] = useState();
  const [errMessage, setErrmessage] = useState(null);

  const { auth } = useSelector((state) => state);
  const { updateProfile } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    deleteActiveNav();
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    if (auth.userData.gender === 'Female') {
      female.setAttribute('checked', true);
    }
    if (auth.userData.gender === 'Male') {
      male.setAttribute('checked', true);
    }
  }, [auth.userData.gender]);

  useEffect(() => {
    if (updateProfile.user && updateProfile.isSuccess) {
      window.scrollTo(0, 0);
      dispatch(getUser(auth.token));
      dispatch({ type: 'UPDATE_PROFILE_CLEAR' });
      alert('Update profile successfully!');
    } else if (updateProfile.isError) {
      alert(updateProfile.message);
    }
  }, [updateProfile.user]);

  // const {
  //   image, name, username, email, createdAt, phoneNumber, address, birthdate, gender,
  // } = (updateProfile.isSuccess ? updateProfile.user : auth.userData);
  const {
    image, name, username, email, createdAt, phoneNumber, address, birthdate, gender,
  } = auth.userData;

  const fileChange = () => {
    let data = {};
    const imageChange = document.getElementById('image').files[0];
    // const imageChange = imgChange;
    // const genderChange = getGender();
    const genderChange = checked;
    const emailChange = document.getElementById('email').value;
    const addressChange = document.getElementById('address').value;
    const phone_numberChange = document.getElementById('phone').value;
    const usernameChange = document.getElementById('username').value;
    const birthdateChange = document.getElementById('birthdate').value;
    const resBirthdate = new Date(birthdateChange).toLocaleDateString('en-CA');
    if (imageChange && imageChange.size <= 2000000) {
      data = { ...data, image: imageChange };
    }
    if (genderChange !== gender && genderChange) {
      data = { ...data, gender: genderChange };
    }
    if (emailChange !== email && checkEmail(emailChange)) {
      data = { ...data, email: emailChange };
    }
    if (addressChange !== address) {
      data = { ...data, address: addressChange };
    }
    if (phone_numberChange !== phoneNumber && checkPhone(phone_numberChange)) {
      data = { ...data, phone_number: phone_numberChange };
    }
    if (usernameChange !== username) {
      data = { ...data, username: usernameChange };
    }
    if (resBirthdate !== birthdate && resBirthdate !== 'Invalid Date') {
      data = { ...data, birthdate: resBirthdate };
    }
    return data;
  };

  const handleSave = (ev) => {
    ev.preventDefault();
    if (errMessage) {
      alert(errMessage);
      setErrmessage(null);
    } else if (Object.keys(fileChange()).length > 0) {
      const { token } = auth;
      dispatch(updated(token, fileChange()));
    }
  };

  const handlePassword = (ev) => {
    ev.preventDefault();
    dispatch({
      type: 'AUTH_LOGOUT',
    });
    navigate('/forgot-password');
  };

  return (
    <div className="profile">
      <header className="container">
        <h1 className="mb-3">Profile</h1>
        <div className="profle-header">
          {auth.isLoading ? <div className="mx-auto"><LoadingSkeleton count={1} col="col-4 mx-auto text-center" /></div>
            : (
              <div className="text-center">
                <div className="image-profile">
                  {image
                    ? <img src={image} onError={(e) => { e.target.src = handleImg; }} alt={name} />
                    : <img src={noImage} alt={name} />}
                  <button className="btn-pen badge" type="button">
                    <BsFillPenFill />
                    <input
                      id="image"
                      style={{
                        zIndex: 134, right: '-80px', opacity: '0', cursor: 'pointer',
                      }}
                      className="position-absolute"
                      type="file"
                      onChange={() => (document.getElementById('image').files[0].size >= 2000000 && setErrmessage('File size must be under 2mb'))}
                    />
                  </button>
                </div>
                <h2 className="mt-5">{name}</h2>
                <p className="text-muted">
                  {email}
                  <br />
                  {phoneNumber}
                  {' '}
                  <br />
                  Has been active since
                  {' '}
                  {[...Array(4)].map((data, index) => String(createdAt)[index])}
                </p>
              </div>
            )}
        </div>
      </header>

      <section className="container mb-5">
        <form>
          <div className="gender mb-5">
            <input type="radio" className="form-check-input" id="male" name="gender" value="male" onChange={() => setChecked('male')} />
            <label htmlFor="male" className="me-5 text-muted">Male</label>
            <input type="radio" className="form-check-input ms-5" id="female" name="gender" value="female" onChange={() => setChecked('female')} />
            <label htmlFor="female">Female</label>
          </div>
          <h4>Contact</h4>
          <div className="row-cols-12 contact">
            <div className="col mt-4">
              <label>Email Adress:</label>
              <input id="email" className="form-control form-contact" type="email" defaultValue={email} onChange={() => !checkEmail(document.getElementById('email').value) && setErrmessage('Email not valid')} />
            </div>
            <div className="col mt-4">
              <label>Adress:</label>
              <textarea id="address" className="form-control form-contact" defaultValue={address} />
            </div>
            <div className="col mt-4">
              <label>Mobile number:</label>
              <input id="phone" className="form-control form-contact" type="text" defaultValue={phoneNumber} onChange={() => !checkPhone(document.getElementById('phone').value) && setErrmessage('Phone number not valid')} />
            </div>
          </div>
          <h4 className="mt-5">Identity</h4>
          <div className="row identity">
            <div className="col-12 col-lg-6 pe-lg-5 mt-4">
              <label>Display name:</label>
              {' '}
              <br />
              <input id="username" className="form-control form-contact" type="text" defaultValue={username} />
            </div>
            <div className="col-12 col-lg-6 ps-lg-5 mt-4">
              <label>Birthdate (YYYY-MM-DD)</label>
              {' '}
              <br />
              <input id="birthdate" className="form-control form-contact" type="text" defaultValue={new Date(birthdate).toLocaleDateString('en-CA')} />
            </div>
          </div>
          {updateProfile.isLoading
            ? <div className="spinner-border mx-auto text-center d-flex mt-5" role="status" />
            : (
              <div className="row btn-group d-flex flex-row justify-content-between">
                <div className="col-lg-6 text-center">
                  <button onClick={handleSave} className="my-3 w-100 btn btn-save" type="button">Save Changes</button>
                </div>
                <div className="col-lg-6 text-center">
                  <button onClick={handlePassword} className="my-3 w-100 btn btn-edit" type="button">Edit Password</button>
                </div>
                <div className="col-lg-6 text-center">
                  <button className="my-3 w-100 btn btn-cancel" type="button">Cancel</button>
                </div>
                <div className="col-lg-6 text-center">
                  <BtnLogout className="my-3 w-100" />
                </div>
              </div>
            )}
        </form>
      </section>
    </div>
  );
}
