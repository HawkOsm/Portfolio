import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import GitHub from "../components/GitHub.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Laptop from "../components/Laptop.jsx";

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
                    Building apps, Cyber & Exploring.
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>


                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />


                    <Laptop scale={sizes.laptopScale}
                            position={sizes.laptopPosition}
                            rotation={[0, -Math.PI / 100, 0]}/>

                        <group >
                            <GitHub
                                position={sizes.githubPosition}
                                scale={sizes.githubScale}
                            />
                            <ReactLogo
                                position={sizes.reactLogoPosition}
                            />
                        </group>

                        <ambientLight intensity={1.5} />
                        <directionalLight intensity={2.5} direction={[1, 1, 1]} />

                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;