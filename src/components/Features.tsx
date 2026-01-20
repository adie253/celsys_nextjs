"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Note: In a real scenario, we'd need actual images. Using placeholders.

import { features } from "@/data";

const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto space-y-32">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 space-y-6"
                        >
                            <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                            <button className="text-white font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors">
                                Learn more
                            </button>
                        </motion.div>

                        {/* Visual/Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 w-full"
                        >
                            <div className={`aspect-video w-full rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
                                <div className="w-full h-full rounded-2xl bg-black/90 backdrop-blur-3xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
                                    {/* Decorative elements */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                                    <span className="text-white/20 text-6xl font-black uppercase tracking-tighter opacity-50 select-none">
                                        Feature {index + 1}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
