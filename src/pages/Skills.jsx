import React from 'react';
import { Code2, Database, Layout, Terminal, GitBranch, Cpu, Globe, Server } from 'lucide-react';

const skills = [
    {
        name: 'React',
        category: 'Frontend',
        level: 90,
        icon: <Code2 />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'JavaScript',
        category: 'Frontend',
        level: 85,
        icon: <Code2 />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'Tailwind CSS',
        category: 'Frontend',
        level: 95,
        icon: <Layout />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
        name: 'HTML5 & CSS3',
        category: 'Frontend',
        level: 95,
        icon: <Globe />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'Node.js',
        category: 'Backend',
        level: 75,
        icon: <Server />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        name: 'Express',
        category: 'Backend',
        level: 70,
        icon: <Server />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
        name: 'Git & GitHub',
        category: 'Tools',
        level: 85,
        icon: <GitBranch />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        name: 'VS Code',
        category: 'Tools',
        level: 90,
        icon: <Terminal />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
];

const Skills = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and the technologies I work with.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="w-8 h-8"
                                    />
                                </div>
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                    {skill.category}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold mb-4">{skill.name}</h3>

                            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                            <div className="mt-2 text-right">
                                <span className="text-sm text-gray-500">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
