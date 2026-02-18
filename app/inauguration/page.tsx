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
        // 0s: Logo
        // 3.5s: Reveal (Phi -> Text)
        // 10s: Redirect
        setTimeout(() => {
            setStage("reveal");
        }, 3500);

        setTimeout(() => {
            setStage("redirecting");
            router.push("/");
        }, 10000);
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
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="z-10 text-center space-y-6"
                    >
                        <motion.div
                            className="relative w-32 h-32 mx-auto flex items-center justify-center"
                        >
                            {/* Rotating Ring */}
                            <motion.div
                                className="absolute inset-0 border border-dashed border-red-500/40 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Counter-Rotating Ring segment */}
                            <motion.div
                                className="absolute inset-[-4px] border-t-2 border-r-2 border-red-500/60 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Glow/Backdrop */}
                            <div className="absolute inset-0 bg-red-600/10 blur-xl rounded-full" />

                            <motion.div
                                animate={{
                                    y: [-5, 5, -5],
                                    filter: [
                                        "drop-shadow(0 0 10px rgba(220,38,38,0.4))",
                                        "drop-shadow(0 0 20px rgba(220,38,38,0.6))",
                                        "drop-shadow(0 0 10px rgba(220,38,38,0.4))"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-24 h-24 flex items-center justify-center overflow-hidden rounded-full"
                            >
                                <Image
                                    src="/fi.png"
                                    alt="Initialize"
                                    width={100}
                                    height={100}
                                    className="w-16 h-16 object-contain relative z-10"
                                />
                                {/* Scanning Glare */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                                    animate={{ x: ["-150%", "150%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                />
                            </motion.div>
                        </motion.div>

                        <motion.p
                            className="text-neutral-400 font-intro tracking-widest text-sm uppercase"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Press Space
                        </motion.p>
                    </motion.div>
                )}

                {/* Stage 1: LOGO */}
                {stage === "logo" && (
                    <motion.div
                        key="logo"
                        className="absolute z-20 flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -50, filter: "blur(20px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Dynamic Red Lines */}
                            <RedLine orientation="horizontal" length="120%" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px] opacity-50" delay={0.5} />

                            <motion.div
                                initial={{ filter: "blur(20px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 1.5, ease: "circOut" }}
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
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(30px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Flash Effect */}
                        <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.2, 0] }}
                            transition={{ duration: 0.5, times: [0, 0.1, 1] }}
                            style={{ pointerEvents: 'none', mixBlendMode: 'overlay' }}
                        />

                        {/* Theme Label */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute top-[30%] mb-8 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-500 uppercase z-10 backdrop-blur-sm"
                        >
                            The Theme
                        </motion.div>

                        <div className="relative flex items-center justify-center perspective-[1000px]">

                            {/* Left Side: DAUNT - Revealed from Right to Left */}
                            <div className="overflow-hidden relative flex justify-end">
                                <motion.h2
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} // Appearing early with Phi
                                    className="text-4xl md:text-8xl font-bold font-robofan text-[#EB0028] tracking-wider text-right mr-2 md:mr-4 whitespace-nowrap"
                                    style={{ textShadow: "0 0 30px rgba(235,0,40,0.3)" }}
                                >
                                    DAUNT
                                </motion.h2>
                            </div>

                            {/* Center: PHI SYMBOL */}
                            <motion.div
                                className="relative z-20 shrink-0 overflow-hidden flex items-center justify-center"
                                initial={{ scale: 0, rotate: -180, opacity: 0, maxWidth: "100px" }}
                                animate={{
                                    scale: [0, 1, 1, 0], // Scale to normal size (1)
                                    rotate: [-180, 0, 0, 0],
                                    opacity: [0, 1, 1, 0],
                                    maxWidth: ["100px", "100px", "100px", "0px"], // Collapse width
                                }}
                                transition={{
                                    duration: 2.5,
                                    times: [0, 0.4, 0.8, 1],
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

                            {/* Right Side: LESS - Revealed from Left to Right */}
                            <div className="overflow-hidden relative flex justify-start">
                                <motion.h2
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 2.2 }} // Delayed to match DAUNT
                                    className="text-4xl md:text-8xl font-bold font-robofan text-white tracking-wider text-left ml-2 md:ml-4 whitespace-nowrap"
                                >
                                    LESS
                                </motion.h2>
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
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
