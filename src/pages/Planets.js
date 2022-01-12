import React, { useState, useEffect } from 'react'
import ParticlesSky from '../components/ParticlesSky'
import planetsData from '../assets/data/planets'
import '../css/planets.css'
// import ModalPlanet from '../components/ModalPlanet'

export default function Planets() {
    const [planets] = useState(planetsData)
    const [planetId, setPlanetId] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    console.log("planetId", planetId)

    // TOGGLE VIEW of PLANET DESCRIPTION
    const toggleModal = (id) => {
        setPlanetId(id)
        setIsModalOpen(!isModalOpen)
    }

    let openModal = (e) => {
        let planetId = e.target.id
        console.log("e target", e.target.id)
        setIsModalOpen(true)
        setPlanetId(planetId)
    }


    let showPlanet = planets.map(data => {
        if (planetId !== data.id) {
            console.log("planetId == data.id:", planetId == data.id)
            // <ModalPlanet data={data} />
            return <div key={data.id}>
                <h3>hmm</h3>
            </div>
        }
        else {
            return <div className='modal'>
                <h3>{data.name}</h3>
            </div>
        }
    })

    // MAP PLANETS - DISPLAY PLANET IMAGES
    let planetsTemplate = planets.map((data) => {
        return <div key={data.id}>
            <img src={data.img}
                alt={data.name} className="planet-img"
                id={data.id}
                width="120"
                // onClick={openModal}
                onClick={() => toggleModal(data.id)}
            />
        </div>
    })

    return (
        <div>
            <ParticlesSky />
            <div className="planets-container">
                {planetsTemplate}
            </div>
            {isModalOpen && planetId ?
                <div>{showPlanet}</div>
                : null
            }
        </div>
    )
}
