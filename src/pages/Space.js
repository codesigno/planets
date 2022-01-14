import React from 'react'
import { Link } from 'react-router-dom'
import ParticlesSky from '../components/ParticlesSky'
import rocketImg from '../assets/img/rakete.png'

export default function Space() {
    return (
        <>
            <ParticlesSky />
            <div className="center info-container">
                <img src={rocketImg} alt="rocket" />
                <h2>coming soon</h2>
                {/* <p className='info-txt'>free space</p> */}
                <Link to="/">go back home</Link>
            </div>
        </>
    )
}
