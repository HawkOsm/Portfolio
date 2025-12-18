import {Float, useGLTF} from "@react-three/drei";
import { useRef } from "react";
import {useGSAP} from "@gsap/react";

export default function SpaceInvaders(props) {
    const { scene } = useGLTF("/models/space_invader.glb");
    const ref = useRef();

    return (<Float floatIntensity={0.5}>
        <primitive ref={ref} object={scene} {...props} />
    </Float>)
}

useGLTF.preload("/models/space_invader.glb");
