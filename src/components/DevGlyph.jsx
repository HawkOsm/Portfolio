import React, { useRef } from "react";
import { Float, Text3D, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function DevGlyph(props) {
    const ref = useRef();

    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.4;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
            <group ref={ref} {...props}>
                <Center>
                    <Text3D
                        font="/fonts/helvetiker_bold.typeface.json"
                        size={1}
                        height={0.25}
                        curveSegments={4}
                        bevelEnabled
                        bevelThickness={0.04}
                        bevelSize={0.04}
                        bevelSegments={3}
                    >
                        {`</>`}
                        <meshStandardMaterial color="#d6d9e9" metalness={0.5} roughness={0.35} />
                    </Text3D>
                </Center>
            </group>
        </Float>
    );
}
