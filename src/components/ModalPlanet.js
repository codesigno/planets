import React from 'react'
import '../css/planets.css'


export default function ModalPlanet(props) {
    console.log("data modal:", props)
    return (
        <div className='modal'>
            <h3>{props.data.name}</h3>
            <p>{props.data.description}</p>
        </div>
    )
}
