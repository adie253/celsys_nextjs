"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

function ParticleField({ count = 3000 }) {
    const mesh = useRef<THREE.Points>(null);
    const mouse = useRef({ x: 0, y: 0 });

    // Generate initial particle positions
    const { positions, initialPositions } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Spread particles across a wide area (x, y) and some depth (z)
            const x = (Math.random() - 0.5) * 120;
            const y = (Math.random() - 0.5) * 120;
            const z = (Math.random() - 0.5) * 50;

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
        }
        return { positions: pos, initialPositions: new Float32Array(pos) };
    }, [count]);

    // Track mouse globally since canvas might be covered by other elements
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse coordinates to -1 to 1
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;

        const currentPositions = mesh.current.geometry.attributes.position.array as Float32Array;
        const time = state.clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Get initial positions
            const ix = initialPositions[i3];
            const iy = initialPositions[i3 + 1];
            const iz = initialPositions[i3 + 2];

            // Mouse interaction using global mouse ref
            const mx = mouse.current.x * 60;
            const my = mouse.current.y * 60;

            // Interaction distance logic
            const dx = ix - mx;
            const dy = iy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Wave movement
            const waveX = Math.cos(iy / 10 + time * 0.5) * 2;
            const waveY = Math.sin(ix / 10 + time * 0.5) * 2;

            // Interaction: Push away if close (Repulsion)
            let force = 0;
            const repulsionRadius = 30; // Increased radius
            if (dist < repulsionRadius) {
                force = (repulsionRadius - dist) / repulsionRadius; // 0 to 1
            }
            // Ease the force
            force = Math.pow(force, 2);

            // Apply movement
            currentPositions[i3] = ix + waveX + (dx / dist) * force * 20; // Push X & Y
            currentPositions[i3 + 1] = iy + waveY + (dy / dist) * force * 20;
            currentPositions[i3 + 2] = iz;
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.13}
                color="#2dd4bf"
                transparent
                opacity={0.8}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

const Background3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 50], fov: 60 }} gl={{ alpha: true }} dpr={[1, 2]}>
                {/* Fog for depth fading */}
                <fog attach="fog" args={['#000000ff', 30, 80]} />
                <ParticleField count={4000} />
            </Canvas>
        </div>
    );
};

export default Background3D;
