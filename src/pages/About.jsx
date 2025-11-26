import React from 'react';
import { User, Code, Coffee, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                        <div className="relative glass p-8 rounded-2xl border border-white/10">
                            <img
                                src="https://files.catbox.moe/9b21xl.jpg"
                                alt="Profile"
                                className="w-full h-auto rounded-xl shadow-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="flex justify-center space-x-4">
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <User size={18} />
                                    <span>Developer</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Globe size={18} />
                                    <span>Remote</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Passionate about creating impactful digital experiences
                        </h2>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            I am a dedicated software developer with a passion for creating efficient and scalable web applications.
                            With a strong foundation in computer science and hands-on experience in modern web technologies,
                            I strive to build solutions that solve real-world problems.
                        </p>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            My journey started when I wrote my first "Hello World" program, and since then, I've been hooked on the
                            endless possibilities of coding. I enjoy learning new frameworks, optimizing performance, and collaborating
                            with other developers to bring ideas to life.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="glass p-4 rounded-xl border border-white/5">
                                <Code className="text-blue-400 mb-2" size={24} />
                                <h3 className="font-semibold">Clean Code</h3>
                                <p className="text-sm text-gray-500">Maintainable & Scalable</p>
                            </div>
                            <div className="glass p-4 rounded-xl border border-white/5">
                                <Coffee className="text-emerald-400 mb-2" size={24} />
                                <h3 className="font-semibold">Dedicated</h3>
                                <p className="text-sm text-gray-500">Passionate Worker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
