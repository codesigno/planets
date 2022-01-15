import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [navbarToggle, setNavbarToggle] = useState(false)

    return (
        <nav>
            <div className="nav">
                <Link to="/"> <i className="fas fa-satellite icon"></i></Link>
                <Link to="/" className="menu menu-icon" onClick={() => { setNavbarToggle((navbarToggle) => !navbarToggle) }}><span></span></Link>
            </div>
            {navbarToggle ?
                <div onMouseLeave={() => { setNavbarToggle(false) }} className='menu-hidden'>
                    <Link to="/" className="nav-link">home</Link>
                    <Link to="/space" className="link">space</Link>
                    <Link to="/#planet" className="link">planets</Link>
                </div>
                : null}
        </nav>
    )
}
