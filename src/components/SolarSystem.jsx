import React from 'react'
import '../css/solar-system.css'

export default function SolarSystem() {
    return (
        <div className='solar-container'>
            <h2 className='txt-vertical'>solar system</h2>
            <div className="orbit-container">
                <div id="sun"></div>
                <div id="mercury-orbit" className="orbit">
                    <div id="mercury"></div>
                </div>
                <div id="venus-orbit" className="orbit">
                    <div id="venus"></div>
                </div>
                <div id="earth-orbit" className="orbit">
                    <div id="earth"></div>
                </div>
                <div id="mars-orbit" className="orbit">
                    <div id="mars"></div>
                </div>
                <div id="jupiter-orbit" className="orbit">
                    <div id="jupiter"></div>
                </div>
                <div id="saturn-orbit" className="orbit">
                    <div id="saturn"></div>
                    <div id="saturn-rings"></div>
                </div>
                <div id="uranus-orbit" className="orbit">
                    <div id="uranus"></div>
                </div>
                <div id="neptune-orbit" className="orbit">
                    <div id="neptune"></div>
                </div>
                <div id="pluto-orbit" className="orbit">
                    <div id="pluto"></div>
                </div>
            </div>
        </div >
    )
}

