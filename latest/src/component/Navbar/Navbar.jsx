import React, { useEffect, useState } from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'


import { Link } from 'react-scroll'

const Navbar = () => {

  const[sticky,setSticky]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    })

  },[]);

  const [mobileMenu,setMobileMenu]=useState(false);

  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false):setMobileMenu(true);

  }
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>

        <img src={logo} alt='' className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li> <Link to='hero'smooth={true} offset={0} duration={500} >Home</Link> </li>
            {/* <li> <Link to='newpage'smooth={true} offset={0} duration={500} ><Newpage></Newpage></Link> </li> */}

            <li> <Link to='program'smooth={true} offset={-260} duration={500} >Programs</Link></li>
            <li> <Link to='about 'smooth={true} offset={-150} duration={500} >About Us</Link></li>
            <li> <Link to='campus'smooth={true} offset={-260} duration={500} >Campus</Link></li>
            <li> <Link to='Testimonials' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
            <li> <button className='btn'>Contact Us</button>  </li>
        </ul>
        <img src={menu_icon}alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar