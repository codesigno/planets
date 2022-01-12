import React, { useState } from 'react'
import ParticlesSky from '../components/ParticlesSky'
import planetsData from '../assets/data/planets'
import '../css/planets.css'

export default function Planets() {
    const [planets] = useState(planetsData)

    const planetsTemplate = planets.map((data) => {
        console.log("data:", data.img)
        return <div key={data.id}>
            {/* <h3>{data.name}</h3>
            <p>{data.description}</p> */}
            <figure className="planet-figure">
                <a href="#">
                    <img src={data.img}
                        alt={data.name} className="planet-img"
                        width="120" />
                </a>
            </figure>
        </div>
    })

    return (
        <div>
            <ParticlesSky />
            <div className="planets-container">
                {planetsTemplate}
            </div>
        </div>
    )
}

