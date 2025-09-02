import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {useEffect, useRef} from "react";

export default function RedHat(props) {
    const { scene } = useGLTF("/models/green_hat.glb");
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.5; // Rotate around Y axis
    });

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set("red"); // Change to any color
            }
        });
    }, [scene]);

    return <primitive ref={ref} object={scene} scale={2.5} {...props} />;
}

