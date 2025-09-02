import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/RedHat.jsx";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
                <p className="sm:text-3xl text-3xl font-medium text-white text-center">
                    Hi, I'm Osman Şahin {/*<span className="waving-hand">👋</span>*/}
                </p>
                <p className="hero_tag text text-gray_gradient">
                    Building apps, Cyber & Exploring.
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    {/* Add lighting so the model is visible */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <HackerRoom />
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;