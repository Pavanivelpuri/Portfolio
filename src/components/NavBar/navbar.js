import React, { useState } from 'react'
import './navbar.css'
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import logo from '../../assets/logo(1).png';
import menu from '../../assets/menu.png';


const Navbar = () => {
  const [showMenu, setShowMenu] =  useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="desktopMenu">
            <Link  activeclass ='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link  activeclass ='active' to='skills'spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link  activeclass ='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link  activeclass ='active' to='clients'spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Certifications</Link>
        </div>
        <button className="desktopMenuButton" onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}> 
        <img src={contactImg} alt="Contact" className="Contact" />Contact Me </button>


          <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
          <div className="navMenu" style={{display : showMenu? 'flex':'none'}}>
            <Link  activeclass ='active' to='intro'spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link  activeclass ='active' to='skills'spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link  activeclass ='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link  activeclass ='active' to='clients'spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link  activeclass ='active' to='contact'spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
