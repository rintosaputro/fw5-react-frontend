import React, { useEffect} from 'react'
import '../assets/css/history.css'
import noImage from '../assets/images/no-image.jpg'
import { Link, Navigate } from 'react-router-dom'
import deleteActiveNav from '../helper/deleteActiveNav'
import {GoSearch} from 'react-icons/go'
import {BsChevronDown, BsChevronRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory, getNextHistory } from '../redux/actions/history'
import { getNewVehicle } from '../redux/actions/vehicle'
import LoadingSkeleton from '../components/LoadingSkeleton';
import { deleteHistory } from '../redux/actions/history'

export default function History() {
  const {history} = useSelector(state => state)
  const {userData} = useSelector(state => state.auth)
  const {newVehicle} = useSelector(state => state.vehicleReducer)
  const {auth} = useSelector(state => state)

  const dispatch = useDispatch()
  
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getHistory(userData.username))
    dispatch(getNewVehicle())
    deleteActiveNav()
  }, [dispatch, userData.username])

  const nextPage = (ev) => {
    ev.preventDefault()
    dispatch(getNextHistory(userData.username, history.pageInfo.currentPage + 1))
  }

  const handleDelete = (id) => {
    // ev.preventDefault()
    const token = window.localStorage.getItem('token')
    dispatch(deleteHistory(token, id))
  }

  const bgImage = (props) => {
    const {image, brand, prepayment, status, idHistory, rentStartDate, rentEndDate} = props
    const bgImg = image || noImage
    return (
      <div className="d-flex align-items-center history-contain" key={idHistory}>
        <div className="row history-data">
          <div className="col-3">
            <div className="vehicle-image1" style={{backgroundImage: `url(${bgImg})`}} ></div>
          </div>
          <div className="col">
            <div className="detail-1">
              <h5 className="m-0 fw-bold">{brand}</h5>
              <span>{new Date(rentStartDate).toDateString()} to {new Date(rentEndDate).toDateString()}</span>
            </div>
            <div className="mt-4 detail-2">
              <h5 className="m-0 fw-bold">Prepayment: Rp. {new Intl.NumberFormat('id-ID', {maximumSignificantDigits: 3}).format(prepayment)}</h5>
              <span className="text-success status">{status}</span>
            </div>
          </div> 
        </div>
        <div className="btn-delete d-none">
          <button  className="btn btn-green">Delete</button>
        </div>
      </div>
    )
  }

  return (
    <div className='history'>
      {auth.token === null && <Navigate to='/login' />}
      <main className="row main-section">
        <section className="col-12 col-md -8 ps-5">
          <div className="row container form-section">
            <div className="col-12 col-md-9 search-bar">
              <form className=" d-flex position-relative">
                <input name='keyword' className="form-control" type="search" placeholder="Search history" />
                <button type="submit" className="btn position-absolute end-0">
                  <GoSearch className='icon-search' />
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </button>
              </form>       
            </div>
            <div className="container col-12 col-md-3 filter">
              <select id='filer' className="form-select select-bar">
                <option className="d-none disabled">Filter</option>
                <option value="type">Type</option>
                <option value="data-added">Data Added</option>
                <option value="name">Name</option>
                <option value="favorite">Favorite Product</option>
              </select>
            </div>
          </div>
          <div className="container today-history">
            <div className="text-muted description">Today</div>
            <Link className="d-flex align-items-center justify-content-between border-bottom" to="#">
              <span>Please finish your payment for vespa for Vespa Rental Jogja</span>
              <i className="fa-solid fa-angle-right"></i>
            </Link>
            <Link className="d-flex align-items-center justify-content-between border-bottom" to="#">
              <span>Your payment has been confirmed!</span>
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
          <div className="container weekly-history">
            <div className="text-muted head-weekly">A week ago</div>
            {history.isLoading && <LoadingSkeleton count={history.history.length} />}
            {history.history.length > 0 ?(history.history.map((data) => {
              const props = {idHistory: data.idHistory, idUser: data.idUser, name: data.name, image: data.image, brand: data.brand, prepayment: data.prepayment, status: data.status, rentStartDate: data.rentStartDate, rentEndDate: data.rentEndDate }
              return bgImage(props)
            })) : <p className='pt-5'>No history yet</p>}
            {history.pageInfo.next && <button onClick={nextPage} className='btn btn-green w-50 mt-5'>next</button>}
          </div>
        </section>
      
        <aside className="col-12 col-md-4">
          <div className="border  text-center">
            <h5 className="fw-bold">New Arrival</h5>
            <div className="main-aside">
              {newVehicle.isLoading && <div className='new-arival' ><LoadingSkeleton count={1} col='col-12' /></div>}
              {newVehicle.vehicle.map((data, index) => {
                return (
                <div className="new-arival" key={index}>
                  <Link to={`/vehicle/${data.idVehicle}`}>
                    <div className="bg-vehicle-1"style={{backgroundImage: `url(${data.image || noImage})`}}></div>
                    <div className="highlight">
                      <h6 className="fw-bold">{data.brand}</h6>
                      <span className="text-muted">{data.location}</span>
                    </div>
                  </Link>
                </div>
                )
              })}
            </div>
            <div className="view-more">
              <Link to="#">
                <div className="text-muted">View more</div>
                <div className="arrow-down"><BsChevronDown /></div>
                <div className="arrow-next d-none"><BsChevronRight /></div>
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
