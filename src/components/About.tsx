"use client";

import { motion } from "framer-motion";
import { about } from "@/data";
import { cn } from "@/lib/utils";

const About = () => {
    return (
        <section id="about" className="py-24 relative bg-black/30">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                                {about.subtitle}
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                {about.title}
                            </h3>
                        </div>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            {about.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {about.whatWeDo.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative h-[600px] w-full rounded-3xl overflow-hidden glass-panel"
                    >
                        {/* Abstract Visual Representation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-4 rounded-full border-2 border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="absolute inset-8 rounded-full border-2 border-accent/30 animate-[spin_20s_linear_infinite]" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                        CelsysTech
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
