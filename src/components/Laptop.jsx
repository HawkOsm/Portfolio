import * as THREE from "three"
import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { a as three } from "@react-spring/three"

export default function Laptop({ hinge = -0.425, ...props }) {
    const laptopRef = useRef()
    const { nodes, materials } = useGLTF("/models/mac-draco.glb") // must be in /public/models/

    // Floating + rotation animation
    useFrame((state) => {
        if (!laptopRef.current) return
        const t = state.clock.getElapsedTime()

        laptopRef.current.rotation.x = THREE.MathUtils.lerp(
            laptopRef.current.rotation.x,
            Math.cos(t / 10) / 10 + 0.25,
            0.1
        )
        laptopRef.current.rotation.y = THREE.MathUtils.lerp(
            laptopRef.current.rotation.y,
            Math.sin(t / 10) / 4,
            0.1
        )
        laptopRef.current.rotation.z = THREE.MathUtils.lerp(
            laptopRef.current.rotation.z,
            Math.sin(t / 10) / 10,
            0.1
        )
        laptopRef.current.position.y = THREE.MathUtils.lerp(
            laptopRef.current.position.y,
            ((-2 + Math.sin(t)) / 3) -2.6,
            0.1
        )
    })

    return (
        <group ref={laptopRef} {...props} dispose={null} >
            {/* Hinge / Screen */}
            <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={nodes["Cube008"].geometry} />
                    <mesh material={materials["matte.001"]} geometry={nodes["Cube008_1"].geometry} />
                    <mesh material={materials["screen.001"]} geometry={nodes["Cube008_2"].geometry} />
                </group>
            </three.group>

            {/* Keyboard */}
            <mesh
                material={materials.keys}
                geometry={nodes.keyboard.geometry}
                position={[1.79, 0, 3.45]}
            />

            {/* Trackpad & Case */}
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes["Cube002"].geometry} />
                <mesh material={materials.trackpad} geometry={nodes["Cube002_1"].geometry} />
            </group>

            {/* Touchbar */}
            <mesh
                material={materials.touchbar}
                geometry={nodes.touchbar.geometry}
                position={[0, -0.03, 1.2]}
            />
        </group>
    )
}

// Preload GLTF to avoid flicker
useGLTF.preload("/models/mac-draco.glb")
