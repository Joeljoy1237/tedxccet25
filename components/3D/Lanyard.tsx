/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-namespace */
"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Text, useTexture } from "@react-three/drei";
import {
    BallCollider,
    CuboidCollider,
    Physics,
    RigidBody,
    useRopeJoint,
    useSphericalJoint,
    RapierRigidBody,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import { useTheme } from "next-themes";

extend({ MeshLineGeometry, MeshLineMaterial });

// Declare the extended elements for TypeScript
declare module "@react-three/fiber" {
    interface ThreeElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
    }
}

// Theme-aware color schemes
const THEME_COLORS = {
    dark: {
        cardBody: "#111111",
        cardBorder: "#1a1a1a",
        cardAccent: "#222222",
        titleText: "#888888",
        nameText: "#ffffff",
        divider: "#333333",
        clip: "#444444",
        ring: "#666666",
        band: "#ffffff",
    },
    light: {
        cardBody: "#ffffff",
        cardBorder: "#e8e8e8",
        cardAccent: "#f5f5f5",
        titleText: "#666666",
        nameText: "#111111",
        divider: "#dddddd",
        clip: "#999999",
        ring: "#aaaaaa",
        band: "#333333",
    },
};

type ThemeColors = typeof THEME_COLORS.dark;

interface LanyardProps {
    position?: [number, number, number];
    gravity?: [number, number, number];
    fov?: number;
    transparent?: boolean;
}

export default function Lanyard({
    position = [0, 0, 30],
    gravity = [0, -40, 0],
    fov = 20,
    transparent = true,
}: LanyardProps) {
    const [isMobile, setIsMobile] = useState<boolean>(
        () => typeof window !== "undefined" && window.innerWidth < 768
    );
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleResize = (): void => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const colors = mounted && resolvedTheme === "light" ? THEME_COLORS.light : THEME_COLORS.dark;

    return (
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none !bg-transparent">
            <Canvas
                className="!bg-transparent pointer-events-auto"
                style={{ background: 'transparent' }}
                camera={{ position, fov }}
                dpr={[1, isMobile ? 1.5 : 2]}
                gl={{ alpha: transparent }}
                onCreated={({ gl }) =>
                    gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
                }
            >
                <ambientLight intensity={Math.PI} />
                <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
                    <Band isMobile={isMobile} colors={colors} />
                </Physics>
                <Environment blur={0.75}>
                    <Lightformer
                        intensity={2}
                        color="white"
                        position={[0, -1, 5]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[-1, -1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[1, 1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={10}
                        color="white"
                        position={[-10, 0, 14]}
                        rotation={[0, Math.PI / 2, Math.PI / 3]}
                        scale={[100, 10, 1]}
                    />
                </Environment>
            </Canvas>
        </div>
    );
}

interface BandProps {
    maxSpeed?: number;
    minSpeed?: number;
    isMobile?: boolean;
    colors: ThemeColors;
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false, colors }: BandProps) {
    const band = useRef<THREE.Mesh>(null);
    const fixed = useRef<RapierRigidBody>(null);
    const j1 = useRef<RapierRigidBody>(null);
    const j2 = useRef<RapierRigidBody>(null);
    const j3 = useRef<RapierRigidBody>(null);
    const card = useRef<RapierRigidBody>(null);

    const strapTexture = useTexture("/Organizer_tag.png");
    useEffect(() => {
        if (strapTexture) {
            strapTexture.wrapS = THREE.RepeatWrapping;
            strapTexture.wrapT = THREE.RepeatWrapping;
            strapTexture.anisotropy = 16;
        }
    }, [strapTexture]);

    const vec = new THREE.Vector3();
    const ang = new THREE.Vector3();
    const rot = new THREE.Vector3();
    const dir = new THREE.Vector3();

    const segmentProps = {
        type: "dynamic" as const,
        canSleep: true,
        colliders: false as const,
        angularDamping: 4,
        linearDamping: 4,
    };

    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([
                new THREE.Vector3(),
                new THREE.Vector3(),
                new THREE.Vector3(),
                new THREE.Vector3(),
            ])
    );
    const [dragged, drag] = useState<false | THREE.Vector3>(false);
    const [hovered, hover] = useState(false);

    useRopeJoint(fixed as any, j1 as any, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j1 as any, j2 as any, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j2 as any, j3 as any, [[0, 0, 0], [0, 0, 0], 1]);
    useSphericalJoint(j3 as any, card as any, [
        [0, 0, 0],
        [0, 0.55, 0],
    ]);

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? "grabbing" : "grab";
            return () => {
                document.body.style.cursor = "auto";
            };
        }
    }, [hovered, dragged]);

    useFrame((state, delta) => {
        if (dragged && typeof dragged !== "boolean") {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z,
            });
        }
        if (fixed.current) {
            [j1, j2].forEach((ref) => {
                if (!ref.current) return;
                const refAny = ref.current as any;
                if (!refAny.lerped) refAny.lerped = new THREE.Vector3().copy(ref.current.translation());
                const clampedDistance = Math.max(
                    0.1,
                    Math.min(1, refAny.lerped.distanceTo(ref.current.translation()))
                );
                refAny.lerped.lerp(
                    ref.current.translation(),
                    delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
                );
            });

            const j1Any = j1.current as any;
            const j2Any = j2.current as any;

            curve.points[0].copy(j3.current!.translation());
            curve.points[1].copy(j2Any.lerped);
            curve.points[2].copy(j1Any.lerped);
            curve.points[3].copy(fixed.current.translation());

            if (band.current) {
                (band.current.geometry as any).setPoints(curve.getPoints(isMobile ? 16 : 32));
            }

            ang.copy(card.current!.angvel() as unknown as THREE.Vector3);
            const cardRotation = card.current!.rotation();
            card.current!.setAngvel({ x: ang.x, y: ang.y - cardRotation.y * 0.25, z: ang.z }, true);
        }
    });

    curve.curveType = "chordal";

    return (
        <>
            {/* Position group to the RIGHT side */}
            <group position={[4, 4.5, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type="fixed" />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody
                    position={[2, 0, 0]}
                    ref={card}
                    {...segmentProps}
                    type={dragged ? "kinematicPosition" : "dynamic"}
                >
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <group
                        scale={2.25}
                        position={[0, -1.2, -0.05]}
                    >
                        {/* Invisible hitbox - exactly matches card body dimensions */}
                        <mesh
                            onPointerOver={() => hover(true)}
                            onPointerOut={() => hover(false)}
                            onPointerUp={(e: any) => {
                                e.target.releasePointerCapture(e.pointerId);
                                drag(false);
                            }}
                            onPointerDown={(e: any) => {
                                e.target.setPointerCapture(e.pointerId);
                                drag(
                                    new THREE.Vector3()
                                        .copy(e.point)
                                        .sub(vec.copy(card.current!.translation() as THREE.Vector3))
                                );
                            }}
                        >
                            {/* Positioned behind card content to avoid z-fighting */}
                            <boxGeometry args={[0.85, 1.25, 0.001]} />
                            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
                        </mesh>
                        {/* ID Card - Minimalist design */}
                        <IDCardMesh colors={colors} />
                    </group>
                </RigidBody>
            </group>
            {/* Band/Lanyard strap - WHITE */}
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    color="white"
                    depthTest={false}
                    resolution={isMobile ? [1000, 2000] : [1000, 1000]}
                    lineWidth={1}
                    useMap={true}
                    map={strapTexture!}
                    repeat={[1, 1]}
                    transparent={false}
                />
            </mesh>
        </>
    );
}



// Minimal Modern ID Card design - TEDx Theme
function IDCardMesh({ colors }: { colors: ThemeColors }) {
    const cardWidth = 0.85;
    const cardHeight = 1.25;
    const cardTexture = useTexture("/Volunteer.png");
    useEffect(() => {
        if (cardTexture) {
            cardTexture.wrapS = cardTexture.wrapT = THREE.ClampToEdgeWrapping;
            cardTexture.repeat.set(1, 1);
            cardTexture.anisotropy = 16;
        }
    }, [cardTexture]);

    return (
        <group>
            {/* Main card body with texture */}
            <mesh castShadow receiveShadow>
                <boxGeometry args={[cardWidth, cardHeight, 0.012]} />
                <meshStandardMaterial
                    map={cardTexture}
                    metalness={0.1}
                    roughness={0.5}
                    transparent={true}
                />
            </mesh>

            {/* ===== CLAMP & CLIP ===== */}
            <group position={[0, cardHeight / 2 + 0.05, 0]}>
                <mesh position={[0, -0.02, 0]}>
                    <boxGeometry args={[0.08, 0.06, 0.02]} />
                    <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[0, 0.045, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <torusGeometry args={[0.035, 0.006, 16, 32]} />
                    <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[0.015, 0.015, 0.06, 16]} />
                    <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
                </mesh>
            </group>
        </group>
    );
}

