import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import GitHub from "../components/GitHub.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Laptop from "../components/Laptop.jsx";
import PythonLogo from "../components/PythonLogo.jsx";
import SpaceInvaders from "../components/SpaceInvaders.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isTablet = useMediaQuery({maxWidth: 1024, minWidth: 769})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isSmall = useMediaQuery({maxWidth: 480})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
                <p className="sm:text-3xl text-3xl font-medium text-white text-center">
                    Hi, I'm Osman Şahin
                </p>
                <p className="hero_tag text text-gray_gradient">
                    Developing, Learning & Exploring.
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>


                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                    <HeroCamera isMobile={isMobile}>
                        <Laptop scale={sizes.laptopScale}
                                position={sizes.laptopPosition}
                                rotation={[0, -Math.PI / 100, 0]}/>
                    </HeroCamera>

                        <group >
                            <GitHub
                                position={sizes.githubPosition}
                                scale={sizes.githubScale}
                            />
                            <ReactLogo
                                position={sizes.reactLogoPosition}
                            />
                            <PythonLogo
                                position={sizes.ringPosition}
                                scale={sizes.ringScale}
                            />
                            <SpaceInvaders
                                position={sizes.cubePosition}
                                scale={sizes.cubeScale}
                            />
                        </group>

                        <ambientLight intensity={1.5} />
                        <directionalLight intensity={2.5} direction={[1, 1, 1]} />


                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name={"Let's Work"} isBeam containerClass="sm: w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    );
};

export default Hero;