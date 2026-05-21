import {Float, useGLTF} from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function PythonLogo(props) {
    const { scene } = useGLTF("/models/python.glb");
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.metalness = 0;
                    child.material.roughness = 1;
                }
            });
        }
    }, []);

    return (<Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.5}>
        <primitive ref={ref} object={scene} {...props} />
        </Float>)
}

useGLTF.preload("/models/python.glb");

