import React from 'react';

const projects = [
    {
        title: 'Android App Example',
        techUsed: ['React Native', 'JavaScript', 'Firebase'],
        description: 'A mobile app developed using React Native, showcasing the use of Firebase for backend services.',
        imageUrl: '/images/soci.png',
    },
    {
        title: 'Web Application Project',
        techUsed: ['React', 'Node.js', 'Express', 'MongoDB'],
        description: 'A full-stack web application built with React on the frontend and Node.js/Express on the backend, using MongoDB as the database.',
        imageUrl: '/images/proj.jpg',
    },
    {
        title: 'iOS App Demo',
        techUsed: ['Swift', 'Xcode', 'UIKit'],
        description: 'A simple iOS app developed with Swift and UIKit, demonstrating core iOS development concepts.',
        imageUrl: '/images/proj.jpg',
    },
];

const ProjectCardsSection = () => {
    return (
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <div key={index} className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${project.imageUrl})` }}>
                    <div className="absolute top-0 left-0 p-4 text-white">
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <ul className="mt-2">
                            {project.techUsed.map((tech, techIndex) => (
                                <li  key={techIndex}>{tech}</li>
                            ))}
                        </ul>
                        <p className="mt-2">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCardsSection;
