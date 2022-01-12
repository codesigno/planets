import React from 'react'
import Particles from "react-tsparticles"

export default function Planets() {
    const config = {
        showCube: false,
        dimension: "3D",
        velocity: 2,
        boundaryType: "passthru",
        antialias: false,
        direction: {
            xMin: -0.6,
            xMax: 0.3,
            yMin: -1,
            yMax: -0.6,
            zMin: -0.6,
            zMax: 0.3
        },
        lines: {
            colorMode: "rainbow",
            color: "#351CCB",
            transparency: 0.9,
            limitConnections: true,
            maxConnections: 20,
            minDistance: 150,
            visible: false
        },
        particles: {
            colorMode: "solid",
            color: "#ffffff",
            transparency: 0.9,
            shape: "circle",
            boundingBox: "canvas",
            count: 2500,
            minSize: 1,
            maxSize: 25,
            visible: true
        },
        cameraControls: {
            enabled: true,
            enableDamping: true,
            dampingFactor: 0.2,
            enableZoom: true,
            autoRotate: false,
            autoRotateSpeed: 0.3,
            resetCameraFlag: true
        }
    };

    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div id="planets-particles">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#080814",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onDiv: {
                                selectors: [],
                                enable: false,
                                mode: [],
                                type: "circle"
                            },
                            resize: true,
                        },

                        modes: {
                            attract: {
                                distance: 200,
                                duration: 0.4,
                                easing: "ease-out-quad",
                                factor: 1,
                                maxSpeed: 50,
                                speed: 1
                            },
                            bounce: {
                                distance: 200
                            },
                            bubble: {
                                distance: 300,
                                duration: 2,
                                opacity: 0.8,
                                size: 3,
                            },
                            connect: {
                                distance: 80,
                                links: {
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grab: {
                                distance: 400,
                                links: {
                                    blink: false,
                                    consent: false,
                                    opacity: 1
                                }
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#b0c5c7",
                        },
                        links: {
                            color: "#b0c5c7",
                            distance: 50,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 500,
                            },
                            value: 10,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                        lines: {
                            colorMode: "#080814",
                            color: "#080814",
                            transparency: 0.3,
                            limitConnections: true,
                            maxConnections: 20,
                            minDistance: 50,
                            visible: false
                        },
                        stroke: {
                            width: 0
                        }
                    },
                    detectRetina: true,
                }}
            />
        </div>
    )
}
