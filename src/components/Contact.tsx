"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Contact = () => {
    return (
        <footer id="contact" className="relative bg-black pt-24 pb-12 border-t border-white/5">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Let's Build Something <br />
                                <span className="text-primary">Extraordinary.</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-md">
                                Ready to transform your digital presence? We are here to help you navigate the future of tech.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <a href="mailto:hello@celsystech.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email us at</p>
                                    <p className="font-medium">hello@celsystech.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Visit us</p>
                                    <p className="font-medium">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Name</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-primary text-white font-semibold hover:from-primary hover:to-blue-400 transition-all flex items-center justify-center gap-2 group">
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.form>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2024 CelsysTech. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
