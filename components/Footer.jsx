import React from 'react'
import {AiFillInstagram,AiOutlineTwitter,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 TZW Headphones All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiFillLinkedin/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer