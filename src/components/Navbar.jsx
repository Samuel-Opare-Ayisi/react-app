import React from 'react'
import './Navbar.css'
import logo from '../assets/food-logo.png'



function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg px-5 py-3">
        <div className="container-fluid">
            <div className="px-2 px-sm-5">
                <img src={logo} alt="Logo" className="navbar-brand text-dark h1" style={{width: '50px'}} />
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon bg-light" ></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav mx-auto text-center" style={{ fontFamily: 'Arial' }}>
                        <li className="nav-item px-4 py-3 py-sm-0">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item px-4 py-3 py-sm-0">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item px-4 py-3 py-sm-0">
                            <a href="#" className="nav-link">Menu</a>
                        </li>
                        <li className="nav-item px-4 py-3 py-sm-0">
                            <a href="#" className="nav-link">Gallery</a>
                        </li>
                        <li className="nav-item px-4 py-3 py-sm-0">
                            <a href="#" className="nav-link">Review</a>
                        </li>
                        <li className="nav-item px-4 py-3 py-sm-0">
                            <a href="#" className="nav-link">Order</a>
                        </li>
                    </ul>


            <div className="navbar-icons text-center text-dark fw-bold h5">
                <i className="bi bi-search px-2"></i>
                <i className="bi bi-heart-fill px-2"></i>
                <i className="bi bi-cart-fill px-2"></i>
            </div>

            
            </div>

            
        </div>
    </nav>
   
   
    </>
  )
}

export default Navbar