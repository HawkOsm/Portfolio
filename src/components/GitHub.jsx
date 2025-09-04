import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import {useFrame} from "@react-three/fiber";

export default function GitHub(props) {
    const { scene } = useGLTF("/models/github.glb");
    const ref = useRef();

    return (<primitive ref={ref} object={scene} {...props} />)
}

useGLTF.preload("/models/github.glb");



