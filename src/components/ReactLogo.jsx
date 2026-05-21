import {Float, useGLTF} from "@react-three/drei";
import { useRef } from "react";

export default function ReactLogo(props) {
    const { scene } = useGLTF("/models/react.glb");
    const ref = useRef();

    return (<Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
        <primitive ref={ref} object={scene} {...props} />
    </Float>)
}

useGLTF.preload("/models/react.glb");

