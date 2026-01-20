"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    // Variants for text animations
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0],
            },
        }),
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients & Effects */}
            <div className="absolute inset-0 z-0 bg-black">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-900/20 blur-[120px] animate-pulse-slow delay-1000" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1 }} />
            </div>

            <div className="container px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">Available for new projects</span>
                </motion.div>

                {/* Main Heading */}
                <div className="max-w-4xl mx-auto space-y-4 mb-8">
                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence</span>
                        <br />
                        Redefined.
                    </motion.h1>

                    <motion.p
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We build cutting-edge digital experiences for forward-thinking brands.
                        Innovative design met with robust engineering.
                    </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="#contact"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-gray-200 hover:scale-105 active:scale-95"
                    >
                        <span className="mr-2">Start a Project</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="#services"
                        className="group inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                    >
                        View Services
                    </Link>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <ChevronDown size={24} />
            </motion.div>

        </section>
    );
};

export default Hero;
