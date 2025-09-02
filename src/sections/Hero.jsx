import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import RedHat from "../components/RedHat.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";

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
                    {/* Add lighting so the model is visible */}

                    <RedHat scale={sizes.deskScale}
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI / 100, 0]}/>

                        <group >
                            <Target
                                position={sizes.targetPosition}
                            />
                        </group>

                        <ambientLight intensity={0.5} />
                        <directionalLight intensity={0.5} />

                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;