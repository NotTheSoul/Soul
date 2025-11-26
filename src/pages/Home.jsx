import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Building the <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                            Future of Web
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I'm a Full Stack Developer passionate about crafting beautiful, high-performance web experiences with modern technologies.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Link
                            to="/projects"
                            className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 border border-white/10 transition-all"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                                <Layout size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Creating responsive and interactive user interfaces using React, TailwindCSS, and modern web standards.
                            </p>
                        </div>

                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400">
                                <Database size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Backend Integration</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Building robust APIs and server-side logic to power scalable applications and seamless data flow.
                            </p>
                        </div>

                        <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                                <Code size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Clean Architecture</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Writing maintainable, efficient, and documented code following industry best practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
