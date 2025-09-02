// Target.jsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Target(props) {
    const group = useRef();
    const { scene } = useGLTF("models/mac-draco.glb"); // ensure file path is correct

    // Keep it gently floating
    useFrame((state) => {
        if (!group.current) return;
        const t = state.clock.getElapsedTime();

        // Gentle idle movement
        group.current.rotation.y = Math.sin(t / 2) * 0.1;
        group.current.position.y = Math.sin(t) * 0.1;
    });

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            scale={0.2}           // adjust until it looks right
            position={[-10, -1, 0]} // move into camera view
        >
            <primitive object={scene} />
        </group>
    );
}
