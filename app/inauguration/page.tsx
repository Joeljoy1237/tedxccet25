"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import TextType from "@/components/TextType";
import Image from "next/image";
import { GeometricAccent, Triangle, DiagonalSlice, RedLine } from "@/components/GeometricShapes";
import Particles from "@/components/visual-effects/Particles";

import dynamic from "next/dynamic";

const InaugurationClient = dynamic(() => Promise.resolve(ClientComponent), {
    ssr: false,
});

export default function InaugurationPage() {
    return <InaugurationClient />;
}

// --- Helper Components ---

// Sci-fi HUD / Energy Field Animation Component
const GyroPhi = () => {
    const size = 280;
    const center = size / 2;

    // Ring configurations: radius, stroke, dash pattern, speed, direction
    const rings = [
        { r: 125, stroke: "rgba(235,0,40,0.2)", dash: "8 12", dur: "8s", dir: "normal" },
        { r: 108, stroke: "rgba(235,0,40,0.35)", dash: "20 10 5 10", dur: "12s", dir: "reverse" },
        { r: 88, stroke: "rgba(255,255,255,0.1)", dash: "3 20", dur: "6s", dir: "normal" },
        { r: 68, stroke: "rgba(235,0,40,0.15)", dash: "40 8", dur: "15s", dir: "reverse" },
    ];

    // Orbiting particles at different radii
    const particles = [
        { r: 125, dur: "6s", size: 4, color: "#EB0028", glow: "0 0 8px #EB0028", delay: "0s" },
        { r: 108, dur: "10s", size: 3, color: "white", glow: "0 0 6px white", delay: "-3s" },
        { r: 88, dur: "4s", size: 3, color: "#EB0028", glow: "0 0 10px #EB0028", delay: "-1s" },
        { r: 68, dur: "8s", size: 2, color: "rgba(255,255,255,0.7)", glow: "0 0 4px white", delay: "-5s" },
    ];

    return (
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center pointer-events-none">

            {/* SVG Rings Layer */}
            <svg
                viewBox={`0 0 ${size} ${size}`}
                className="absolute inset-0 w-full h-full"
                fill="none"
            >
                <defs>
                    <radialGradient id="coreGlow">
                        <stop offset="0%" stopColor="rgba(235,0,40,0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>

                {/* Core glow circle */}
                <circle cx={center} cy={center} r="50" fill="url(#coreGlow)" />

                {/* Animated dashed rings */}
                {rings.map((ring, i) => (
                    <circle
                        key={i}
                        cx={center}
                        cy={center}
                        r={ring.r}
                        stroke={ring.stroke}
                        strokeWidth="1"
                        strokeDasharray={ring.dash}
                        className="origin-center"
                        style={{
                            transformOrigin: "center",
                            animation: `spin ${ring.dur} linear infinite ${ring.dir}`,
                        }}
                    />
                ))}

                {/* Crosshair tick marks */}
                {[0, 90, 180, 270].map((angle) => (
                    <line
                        key={angle}
                        x1={center + 55 * Math.cos((angle * Math.PI) / 180)}
                        y1={center + 55 * Math.sin((angle * Math.PI) / 180)}
                        x2={center + 65 * Math.cos((angle * Math.PI) / 180)}
                        y2={center + 65 * Math.sin((angle * Math.PI) / 180)}
                        stroke="rgba(235,0,40,0.4)"
                        strokeWidth="1.5"
                    />
                ))}

                {/* Pulsing expansion ring */}
                <circle
                    cx={center}
                    cy={center}
                    r="45"
                    stroke="rgba(235,0,40,0.3)"
                    strokeWidth="0.5"
                    fill="none"
                    style={{
                        transformOrigin: "center",
                        animation: "pulseRing 3s ease-out infinite",
                    }}
                />
            </svg>

            {/* Orbiting Particles (HTML layer for box-shadow glow) */}
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        width: p.size,
                        height: p.size,
                        borderRadius: "50%",
                        backgroundColor: p.color,
                        boxShadow: p.glow,
                        offsetPath: `circle(${p.r * (100 / center)}% at center)`,
                        animation: `orbit ${p.dur} linear infinite`,
                        animationDelay: p.delay,
                    }}
                />
            ))}

            {/* Central Phi Symbol */}
            <motion.div
                className="relative z-10 w-16 h-16 md:w-20 md:h-20"
                animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                        "drop-shadow(0 0 6px rgba(235,0,40,0.3))",
                        "drop-shadow(0 0 20px rgba(235,0,40,0.7))",
                        "drop-shadow(0 0 6px rgba(235,0,40,0.3))",
                    ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image
                    src="/fi.png"
                    alt="Phi"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* CSS Keyframes */}
            <style jsx>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes orbit {
                    to { offset-distance: 100%; }
                }
                @keyframes pulseRing {
                    0% { r: 45; opacity: 0.4; }
                    100% { r: 130; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

// Client Component definition
function ClientComponent() {
    const router = useRouter();
    const [hasStarted, setHasStarted] = useState(false);
    const [stage, setStage] = useState<"idle" | "logo" | "reveal" | "redirecting">(
        "idle"
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" && !hasStarted) {
                e.preventDefault(); // Prevent scrolling
                startSequence();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [hasStarted]);

    const startSequence = () => {
        setHasStarted(true);
        setStage("logo");

        // Timeline
        // 0s: Logo fades in (1.2s entrance)
        // 0.4s: Underline reveals
        // 1s: "presents" fades in
        // 4s: Logo exits → Reveal stage begins
        // 4.3s: DAUNT + Phi spin in simultaneously
        // 5.5s: Phi collapses, LESS slides in
        // 6.8s: Tagline fades up
        // 13s: Redirect to home
        setTimeout(() => {
            setStage("reveal");
        }, 4000);

        setTimeout(() => {
            setStage("redirecting");
            router.push("/");
        }, 11000);
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden relative selection:bg-red-600 selection:text-white">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)]" />

                {/* Floating Geometric Accents */}
                <div className="absolute inset-0 opacity-20">
                    <GeometricAccent variant={1} className="top-20 left-10 scale-75 opacity-50" />
                    <GeometricAccent variant={4} className="bottom-20 right-10 scale-75 opacity-50" />
                    <div className="absolute top-1/3 right-1/4 animate-pulse">
                        <Triangle direction="down" size="sm" className="opacity-30" />
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {/* Stage 0: PROMPT */}
                {stage === "idle" && (
                    <motion.div
                        key="prompt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="z-10 w-full h-full flex flex-col items-center justify-center relative bg-black"
                    >
                        {/* 3D-ish Gyroscope Scene */}
                        <div className="relative group cursor-pointer flex flex-col items-center justify-center" onClick={startSequence}>

                            <GyroPhi />

                            {/* Clean Text */}
                            <motion.div 
                                className="mt-12 text-center"
                                initial={{ opacity: 0.4 }}
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="font-intro text-sm md:text-base tracking-[0.5em] text-white/60 group-hover:text-red-500 transition-colors duration-300">
                                    PRESS SPACE
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Stage 1: LOGO */}
                {stage === "logo" && (
                    <motion.div
                        key="logo"
                        className="absolute z-20 flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.95, y: 15, filter: "blur(8px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(16px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="relative flex flex-col items-center">
                            <motion.div
                                initial={{ filter: "blur(12px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 1, ease: "circOut" }}
                                className="relative"
                            >
                                <Image
                                    src="/Logo1.svg"
                                    alt="TEDxCCET"
                                    width={600}
                                    height={200}
                                    className="w-[80vw] md:w-[600px] h-auto object-contain relative z-10"
                                    priority
                                />
                            </motion.div>

                            {/* Modern Animated Underline */}
                            <div className="relative w-full max-w-[500px] h-[2px] mt-6 overflow-hidden">
                                {/* Base Line (reveals from center) */}
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "100%", opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 m-auto h-px bg-linear-to-r from-transparent via-red-600 to-transparent"
                                />

                                {/* Moving Shine Effect */}
                                <motion.div
                                    className="absolute top-0 bottom-0 w-20 bg-linear-to-r from-transparent via-white/80 to-transparent blur-[2px]"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "500%" }} // Move far enough to clear
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeInOut",
                                        repeatDelay: 0.3
                                    }}
                                />

                                {/* Glow Underneath */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="absolute inset-x-0 top-0 h-[10px] bg-red-600/30 blur-md rounded-full"
                                />
                            </div>

                            {/* Presents Text */}
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="mt-4 text-white/90 text-sm tracking-[0.4em] uppercase font-medium drop-shadow-md"
                            >
                                presents
                            </motion.p>
                        </div>
                    </motion.div>
                )}

                {/* Stage 2: REVEAL (PHI -> DAUNTLESS) */}
                {stage === "reveal" && (
                    <motion.div
                        key="reveal"
                        className="absolute z-20 flex flex-col items-center justify-center w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 1.5,
                            filter: "blur(16px) brightness(1.3)",
                            transition: { duration: 1, ease: "easeInOut" }
                        }}
                    >
                        {/* Flash Effect — hard hit */}
                        <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 0.3, times: [0, 0.2, 1] }}
                            style={{ pointerEvents: 'none', mixBlendMode: 'overlay' }}
                        />

                        {/* Shockwave Ring */}
                        <motion.div
                            className="absolute rounded-full border border-red-500/40"
                            initial={{ width: 0, height: 0, opacity: 0.8 }}
                            animate={{ width: 600, height: 600, opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            style={{ pointerEvents: 'none' }}
                        />

                        <div className="relative flex items-center justify-center perspective-[1000px]">

                            {/* Left Side: DAUNT — slams in fast */}
                            <div className="overflow-hidden relative flex justify-end">
                                <motion.h2
                                    initial={{ x: "120%", opacity: 0, scale: 1.2 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-4xl md:text-8xl font-bold font-robofan text-[#EB0028] tracking-wider text-right mr-2 md:mr-4 whitespace-nowrap"
                                    style={{ textShadow: "0 0 40px rgba(235,0,40,0.5)" }}
                                >
                                    DAUNT
                                </motion.h2>
                            </div>

                            {/* Center: PHI SYMBOL — fast spin, hold, collapse */}
                            <motion.div
                                className="relative z-20 shrink-0 overflow-hidden flex items-center justify-center"
                                initial={{ scale: 0, rotate: -180, opacity: 0, maxWidth: "100px" }}
                                animate={{
                                    scale: [0, 1.15, 1, 0],
                                    rotate: [-180, 0, 0, 0],
                                    opacity: [0, 1, 1, 0],
                                    maxWidth: ["100px", "100px", "100px", "0px"],
                                }}
                                transition={{
                                    duration: 2.2,
                                    times: [0, 0.25, 0.65, 1],
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-pulse" />
                                <Image
                                    src="/fi.png"
                                    alt="Dauntless symbol ∅"
                                    width={100}
                                    height={100}
                                    className="w-10 h-10 md:w-20 md:h-20 object-contain mx-2"
                                />
                            </motion.div>

                            {/* Right Side: LESS — slams in as Phi collapses */}
                            <div className="overflow-hidden relative flex justify-start">
                                <motion.h2
                                    initial={{ x: "-120%", opacity: 0, scale: 1.2 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
                                    className="text-4xl md:text-8xl font-bold font-robofan text-white tracking-wider text-left ml-2 md:ml-4 whitespace-nowrap"
                                >
                                    LESS
                                </motion.h2>
                            </div>
                        </div>

                        {/* Second flash when LESS lands */}
                        <motion.div
                            className="absolute inset-0 bg-red-900/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 0.3, delay: 1.5, times: [0, 0.3, 1] }}
                            style={{ pointerEvents: 'none' }}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.8, duration: 1, ease: "easeOut" }}
                            className="text-neutral-400 font-intro text-lg md:text-xl tracking-widest mt-12 relative z-10"
                        >
                            REDESIGNING FEAR. REDEFINING THE FUTURE.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}
