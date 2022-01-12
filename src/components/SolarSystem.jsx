import React from 'react'
import '../css/solar-system.css'

export default function SolarSystem() {
    return (
        <div className='solar-container'>
            <div class="orbit-container">
                <div id="sun"></div>
                <div id="mercury-orbit" class="orbit">
                    <div id="mercury"></div>
                </div>
                <div id="venus-orbit" class="orbit">
                    <div id="venus"></div>
                </div>
                <div id="earth-orbit" class="orbit">
                    <div id="earth"></div>
                </div>
                <div id="mars-orbit" class="orbit">
                    <div id="mars"></div>
                </div>
                <div id="jupiter-orbit" class="orbit">
                    <div id="jupiter"></div>
                </div>
                <div id="saturn-orbit" class="orbit">
                    <div id="saturn"></div>
                    <div id="saturn-rings"></div>
                </div>
                <div id="uranus-orbit" class="orbit">
                    <div id="uranus"></div>
                </div>
                <div id="neptune-orbit" class="orbit">
                    <div id="neptune"></div>
                </div>
                <div id="pluto-orbit" class="orbit">
                    <div id="pluto"></div>
                </div>
            </div>
        </div>
    )
}

