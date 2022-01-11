import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/planets" className="nav-link">planets</Link>
        </nav>
    )
}
