/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import '../assets/css/vehicle-detail.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { getDetailHistory } from '../redux/actions/history';
import defaultImg from '../assets/images/no-image.jpg';
import handleImg from '../assets/images/defaultItem.jpg';

export default function NewHistory() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state);
  const { userData } = useSelector((state) => state.auth);
  const { payment } = useSelector((state) => state);
  const { detailHistory, auth } = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
    // const token = window.localStorage.getItem('token');
    const { token } = auth;
    dispatch(getDetailHistory(token, id));
    const navList = document.getElementById('vehicleType');
    navList.classList.remove('active');
  }, []);

  const {
    image, type, brand, location, price, rentStartDate,
  } = detailHistory.history;

  return (
    <div className="vehicle-detail">
      <section className="container first-section payment">
        <div className="container row pt-5 detail-vehicle detail-vehicle-history">
          {payment.isLoading && <LoadingSkeleton count={1} col="col-12" />}
          <div className="col-12 col-md-5 col-xl-4 img-section overflow-hidden d-flex align-item-center justify-content-center">
            {image
              ? <img src={image} onError={(e) => { e.target.src = handleImg; }} alt={brand} className="img-fluid" />
              : <img src={defaultImg} alt={brand} className="img-fluid" />}
          </div>
          <div className="col-12 col-md-7 col-xl-8 description-section">
            <div className="description">
              <h2 className="fw-bold">{brand}</h2>
              <p>{location}</p>
            </div>
            <div className="status my-3 d-flex flex-column">
              <span className="text-muted fw-bold">No prepayment</span>
            </div>
          </div>
        </div>

        <div className="rent-data">
          <div className="d-flex flex-row data-item">
            <div className="first-col">
              <div className="border border-dark w-100 fw-bold">
                Quantity:
                {' '}
                {counter.totalItem}
                {' '}
                bikes
              </div>
            </div>
            <div className="second-col">
              <div className="border border-dark w-100">
                <span className="reservation-date fw-bold">Reservation Date: </span>
                <span>
                  {new Date(rentStartDate).toDateString()}
                  {' '}
                  (
                  {counter.totalDay}
                  {' '}
                  day)
                </span>

              </div>
            </div>
          </div>

          <div className="d-flex flex-row data-item">
            <div className="first-col d-flex">
              <div className="border border-dark w-100 overflow-auto second-row order-details">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Order details:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(Number(counter.totalItem))].map((data, index) => (
                      <tr key={index}>
                        <td>
                          1
                          {type}
                          : Rp.
                          {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(price)}
                          {' '}
                          (
                          {counter.totalDay}
                          {' '}
                          day)
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="fw-bold pt-2">
                        Total:
                        {' '}
                        {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(price * counter.totalItem * counter.totalDay)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="second-col">
              <div className="border border-dark w-100  second-row identity">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Identity:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {userData.name}
                        (
                        {userData.phoneNumber}
                        )
                      </td>
                    </tr>
                    <tr>
                      <td>{userData.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
