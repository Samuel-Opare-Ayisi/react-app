import React from 'react'
import './MenuItems.css'

function MenuItems({ image, name, price}) {
  return (
    <>
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="BurgerCard px-3 text-center fw-bold">
        <img src={image} alt={name} className="img-fluid" />
        <h1 className="py-3">{name}</h1>
        <p className="">${price}</p>
      </div>
    </div>
    </>
  )
}

export default MenuItems