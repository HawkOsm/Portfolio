import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import {useFrame} from "@react-three/fiber";

export default function SpaceInvaders(props) {
    const { scene } = useGLTF("/models/space_invader.glb");
    const ref = useRef();

    return (<primitive ref={ref} object={scene} {...props} />)
}

useGLTF.preload("/models/space_invader.glb");
