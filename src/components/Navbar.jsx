import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div className="nav">
                <Link to="/"> <i className="fas fa-satellite icon"></i></Link>
                <Link to="/" className="menu menu-icon"><span></span></Link>
            </div>
            {/* <div className="hidden-menu">
                <Link to="/" className="nav-link">home</Link>
                <Link to="/space" className="link">space</Link>
                <Link to="/#planet" className="link">planets</Link>
            </div> */}
        </nav>
    )
}
