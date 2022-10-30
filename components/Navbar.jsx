import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import {Cart} from '../components'

const Navbar = () => {
  const {showCart,setShowCart,totalQuantities} = useStateContext()

  return (
    <div className='navbar-container'>
        <p className='logo'>
            <Link href={'/'}>TZW Headphones</Link>
        </p>
        <button className='cart-icon' onClick={()=> setShowCart(!showCart)}>
            <AiOutlineShopping/>
            <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

        {showCart && <Cart/>}
    </div>
  )
}

export default Navbar