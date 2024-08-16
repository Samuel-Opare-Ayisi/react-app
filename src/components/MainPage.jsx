import React from 'react'

import burger from '../assets/pngwing.com.png'

function MainPage() {
  return (
   <>
   <section className="main">
    <div className="container-fluid py-5">
      <div className="row">
        
            <div className="col-sm-12 col-md-12 col-lg-6 py-5 px-5">
                <div className="py-5">
                <h1 className="fw-bold py-5" style={{fontSize: '95px'}}>Get Fresh <span className='text-warning'>Food</span> <br />in a Easy Way</h1>
                <p className="pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dolorum rerum reiciendis perspiciatis, repellendus consequuntur asperiores praesentium soluta ratione explicabo, nemo cupiditate magni a ducimus expedita possimus voluptas corporis.</p>
                <a href="" className="btn btn-warning fw-bold px-3">Order Now <i className="bi bi-arrow-right"></i> </a>
                </div>
            </div>

        <div className="col-sm-12 col-md-12 col-lg-6 py-0">
        <img src={burger} alt="burger" className="w-100" />
        </div>
        </div>
        
    </div>

   
   </section>
   </>
  )
}

export default MainPage