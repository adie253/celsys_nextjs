"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 bg-black relative">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
                        Selected Work
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">
                        Featured Projects
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    {portfolio.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Project Card */}
                            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-900 border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                                {/* Placeholder Content since we don't have real images yet */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end   bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-primary text-sm font-medium mb-2 block">
                                            {project.category}
                                        </span>
                                        <h4 className="text-2xl font-bold text-white mb-2">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 backdrop-blur-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Action */}
                                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                    >
                        View all projects <ExternalLink size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
