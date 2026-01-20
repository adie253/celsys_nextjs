"use client";

import { motion } from "framer-motion";
import { blogs } from "@/data";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-black/50 relative">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
                            Design & Tech
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">
                            Latest Insights
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors group">
                            View all articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5 mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700" />

                                {/* Date Overlay */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white flex items-center gap-1.5">
                                        <Calendar size={12} className="text-primary" />
                                        {post.date}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                    <Clock size={12} />
                                    <span>{post.readTime}</span>
                                </div>

                                <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                                    {post.title}
                                </h4>

                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="pt-2">
                                    <span className="text-xs font-bold text-white border-b border-primary/50 pb-0.5 group-hover:border-primary transition-colors">
                                        Read Article
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;
