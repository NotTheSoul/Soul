import React from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online stores. Features include real-time sales tracking, inventory management, and customer analytics. Built with performance and scalability in mind.',
        image: 'https://source.unsplash.com/random/800x600?tech,dashboard',
        tags: ['React', 'Tailwind', 'Recharts', 'Firebase'],
        githubLink: '#',
        demoLink: '#',
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management tool allowing teams to organize, prioritize, and track work. Includes drag-and-drop interfaces, real-time updates, and team chat functionality.',
        image: 'https://source.unsplash.com/random/800x600?tech,app',
        tags: ['React', 'Redux', 'Node.js', 'Socket.io'],
        githubLink: '#',
        demoLink: '#',
    },
    {
        title: 'Weather Forecast App',
        description: 'A beautiful weather application providing accurate forecasts, radar maps, and severe weather alerts. Uses geolocation to provide local weather updates instantly.',
        image: 'https://source.unsplash.com/random/800x600?weather',
        tags: ['React', 'OpenWeatherMap API', 'Styled Components'],
        githubLink: '#',
        demoLink: '#',
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of projects that showcase my passion for building robust and user-friendly applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-4">
                                        <a
                                            href={project.githubLink}
                                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.demoLink}
                                            className="p-2 bg-blue-500/80 rounded-full hover:bg-blue-500 text-white transition-colors backdrop-blur-sm"
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                                        >
                                            <Tag size={12} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
