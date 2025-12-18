import {Float, useGLTF} from "@react-three/drei";
import { useRef, useEffect } from "react";
import {useGSAP} from "@gsap/react";

export default function PythonLogo(props) {
    const { scene } = useGLTF("/models/python.glb");
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.traverse((child) => {
                if (child.isMesh && child.material) {
                    // Make material non-metallic
                    child.material.metalness = 0;
                    // Optionally adjust roughness for better look
                    child.material.roughness = 1;

                }
            });
        }
    }, []);

    return (<Float floatIntensity={0.5}>
        <primitive ref={ref} object={scene} {...props} />
        </Float>)
}

useGLTF.preload("/models/python.glb");

