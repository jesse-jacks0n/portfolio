import React from 'react';
import {TechDart, TechFirebase, TechFlutter, TechKotlin, TechMongoDB, TechReactJS} from "./TechUsed";

const projects = [
    {
        title: 'Flutter Desktop App with MongoDB',
        description: 'A cross-platform desktop application built using Flutter and Dart, featuring MongoDB for data storage.',
        imageUrl: '/images/project1.png',
        techUsed: ['Flutter', 'Dart', 'MongoDB'],
        githubLink: 'https://github.com/your-username/your-repo',
    },
    {
        title: 'Flutter Diabetes Mobile App with Firebase',
        description: 'A mobile application developed with Flutter and Dart for diabetes management, utilizing Firebase for backend services.',
        imageUrl: '/images/proj.jpg',
        techUsed: ['Flutter', 'Dart', 'Firebase'],
        githubLink: 'https://github.com/your-username/your-repo',
    },
    {
        title: 'Portfolio Website',
        description: 'This personal portfolio website showcasing my skills, projects, and experience. Developed using React and hosted on Firebase.',
        imageUrl: '/images/proj.jpg',
        techUsed: ['React', 'Firebase'],
        githubLink: 'https://github.com/your-username/your-repo',
    },
    {
        title: 'Freelancer Website with React and Firebase',
        description: 'A freelance services website built using React for the frontend and Firebase for authentication and backend services.',
        imageUrl: '/images/proj.jpg',
        techUsed: ['React', 'Firebase'],
        githubLink: 'https://github.com/your-username/your-repo',
    },
    {
        title: 'Simple BMI Calculator with Flutter',
        description: 'A basic Body Mass Index (BMI) calculator mobile app created with Flutter and Dart for quick and easy BMI calculations.',
        imageUrl: '/images/proj.jpg',
        techUsed: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/your-username/your-repo',
    },
    {
        title: 'Link Sharing App with Flutter',
        description: 'A mobile app developed using Flutter and Dart for sharing and managing links. Users can add, edit, and delete their shared links.',
        imageUrl: '/images/proj.jpg',
        techUsed: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/your-username/your-repo',
    },
    {
        title: 'Text-to-Speech App with Kotlin',
        description: 'A mobile application built with Kotlin that converts text input into speech. Useful for generating audio content from written text.',
        imageUrl: '/images/proj.jpg',
        techUsed: ['Kotlin'],
        githubLink: 'https://github.com/your-username/your-repo',
    },
];

const AllProjects = () => {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-6 mx-6">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white  border mb-8 border-gray-100 shadow-lg shadow-gray-200 p-6">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover mb-4 "/>
                        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techUsed.map((tech, techIndex) => {
                                switch (tech) {
                                    case 'Flutter':
                                        return <TechFlutter key={techIndex} />;
                                    case 'Dart':
                                        return <TechDart key={techIndex} />;
                                    case 'MongoDB':
                                        return <TechMongoDB key={techIndex} />;
                                    case 'Firebase':
                                        return <TechFirebase key={techIndex} />;
                                    case 'React':
                                        return <TechReactJS key={techIndex} />;
                                    case 'Kotlin':
                                        return <TechKotlin key={techIndex} />;
                                    // Add cases for other technologies
                                    default:
                                        return <span key={techIndex}>{tech}</span>;
                                }
                            })}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center gap-2"><img src="/icons/social.png" className="w-8"/> GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;

