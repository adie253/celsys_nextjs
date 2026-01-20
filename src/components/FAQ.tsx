"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-black relative">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Header / Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
                            Common Questions
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Frequently Asked <br />
                            <span className="text-gray-500">Questions</span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                            Everything you need to know about how we work and what we can achieve together.
                        </p>
                        <div className="pt-4">
                            <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-8 font-medium text-white transition-all hover:bg-white/20">
                                Ask something else
                            </a>
                        </div>
                    </motion.div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "border border-white/10 rounded-2xl overflow-hidden transition-all duration-300",
                                    activeIndex === index ? "bg-white/5 border-white/20" : "bg-transparent hover:border-white/20"
                                )}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="flex items-center justify-between w-full p-6 text-left"
                                >
                                    <span className={cn("text-lg font-medium transition-colors", activeIndex === index ? "text-white" : "text-gray-400")}>
                                        {faq.question}
                                    </span>
                                    <span className={cn("p-2 rounded-full transition-colors", activeIndex === index ? "bg-primary text-white" : "bg-white/5 text-gray-400")}>
                                        {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
