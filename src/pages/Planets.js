import React, { useState } from 'react'
import ParticlesSky from '../components/ParticlesSky'
import planetsData from '../assets/data/planets'
import '../css/planets.css'


export default function Planets() {
    const [planets] = useState(planetsData)
    const [planetId, setPlanetId] = useState('')
    const [isViewOpen, setIsViewOpen] = useState(false)

    // OPEN PLANET VIEW
    const openPlanetView = (id) => {
        setPlanetId(id)
        setIsViewOpen(!isViewOpen)
    }

    // CLOSE PLANET VIEW
    let closePlanetView = () => {
        setIsViewOpen(false)
    }

    // MAP PLANETS - DISPLAY PLANET IMAGES
    let planetsImg = planets.map((data) => {
        return <div key={data.id}>
            <img src={data.img}
                alt={data.name} className="planet-img"
                width="120"
                onClick={() => openPlanetView(data.id)}
            />
        </div>
    })

    // DISPLAY PLANET DESCRIPTION
    let showPlanet = planets.map(data => {
        if (planetId !== data.id) {
            return <div key={data.id}>
                <h3>hmm</h3>
            </div>
        }
        else {
            return <div key={data.id} className='planet-view'>
                <button className='btn close-btn' onClick={closePlanetView}>
                    <i class="fas fa-times-circle"></i>
                </button>
                <img src={data.img}
                    alt={data.name} className="planet-img" width="200" />
                <h3>{data.name}</h3>
                <p className='descr'>{data.description}</p>
                <div className="planet-info">
                    <p>rotation time<span className='highlight'>{data.rotationTime} days</span></p>
                    <p>revolution time<span className='highlight'>{data.revolutionTime} days</span></p>
                    <p>radius<span className='highlight'>{data.radius}</span></p>
                    <p>average temp<span className='highlight'>{data.averageTemp}C</span></p>
                </div>
            </div>
        }
    })

    return (
        <div className='planets' id='planet'>
            <h2 className='txt-vertical'>planets</h2>
            <ParticlesSky />
            <div className="planets-container">
                {planetsImg}
            </div>
            {isViewOpen && planetId ?
                <div>{showPlanet}</div>
                : null
            }
        </div>
    )
}
