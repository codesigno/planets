import React from 'react'
import { Link } from 'react-router-dom'
import ParticlesSky from './ParticlesSky'

export default function NotFound() {
    return (
        <>
            <ParticlesSky />
            <div className="not-found-info center">
                <h2>page not found</h2>
                <p className='not-found-404'>404</p>
                <Link to="/">back to home</Link>
            </div>
        </>
    )
}
