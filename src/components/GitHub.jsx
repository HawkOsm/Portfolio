import {Float, useGLTF} from "@react-three/drei";
import { useRef } from "react";

export default function GitHub(props) {
    const { scene } = useGLTF("/models/github.glb");
    const ref = useRef();

    return (<Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
        <primitive ref={ref} object={scene} {...props} />
    </Float>)
}

useGLTF.preload("/models/github.glb");



