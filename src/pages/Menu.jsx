import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItems from '../components/MenuItems'

function Menu() {
  return (
    <>
   <section className='px-5'>
   <div className="container-fluid px-5 py-5">
      <div className="row g-4">
      <h3 className='text-center fw-bold'>Menu Items</h3>
        {MenuList.map((menuItem, key) =>
        {
          return (
            <>
            <MenuItems key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
            </>
          )
        })}
      </div>
    </div>

   </section>
    
    </>
  )
}

export default Menu