import React, {useEffect, useState} from 'react';
import AOS from 'aos';

const projects = [
    {
        title: 'AI Assistant for the Blind',
        description: 'An AI assistant for the visually impaired that can perform tasks such as reading text, object recognition, Navigation. Built using Tensorflow, Python, OCR, Text Recognition, and OpenCV.',
        imageUrl: '/images/vision.png',
        techUsed: ['Java', 'OpenCV', 'Tensorflow', 'Python'],
        githubLink: 'https://github.com/jesse-jacks0n/blind-eye',
        // pdfLink: '/pdfs/flutterdesktop.pdf',
    },
    {
        title: '🌿 Cultivara',
        description: 'Cultivara is a premium smart farming assistant that empowers agricultural stakeholders with real-time plant health analytics, environmental monitoring, and precision task management, all in one unified platform.',
        imageUrl: '/images/cultivara.png',
        techUsed: ['Flutter', 'OpenCV', 'Tensorflow', 'Python'],
        githubLink: 'https://github.com/jesse-jacks0n/Cultivara',
        // pdfLink: '/pdfs/flutterdesktop.pdf',
    },
    {
        title: 'Meals',
        description: 'A sleek, offline-first meals planning app with a vibrant modern interface. Users can browse daily meals across categories like breakfast, lunch, snacks, and supper each with images, details, and easy navigation.',
        imageUrl: '/images/meals.png',
        techUsed: ['Flutter'],
        githubLink: 'https://github.com/jesse-jacks0n/meals',
        // pdfLink: '/pdfs/flutterdesktop.pdf',
    },
    {
        title: 'Mtaa Gas',
        description: 'Order gas easily from nearby dealers, track deliveries, and get real-time updates—all from one app. Mtaa Gas connects customers with trusted local suppliers for fast and reliable service. Now available for testing on the Play Store!',
        imageUrl: '/images/mtaagas.png',
        techUsed: ['Flutter'],
        githubLink: 'https://github.com/jesse-jacks0n/',
        // pdfLink: '/pdfs/flutterdesktop.pdf',
    },
    {
        title: 'Link Sharing App with Flutter',
        description: 'A mobile app developed with Flutter and Dart for sharing and managing links. Users can add, edit, and delete their shared links.',
        imageUrl: '/images/soci.png',
        techUsed: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/jesse-jacks0n/flutter-link-share',
        pdfLink: '/pdfs/project1.pdf',
    },
    {
        title: 'Dietary AI App',
        description: 'AI-powered app for personalized meal plans, nutrition tracking, and healthy recipes tailored to your goals and preferences.',
        imageUrl: '/images/kaluna.png',
        techUsed: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/your-username/your-repo',
        pdfLink: '/pdfs/project1.pdf',
    },
    {
        title: 'Flutter Desktop App with MongoDB',
        description: 'A cross-platform desktop application built using Flutter and Dart, featuring MongoDB for data storage.',
        imageUrl: '/images/project1.png',
        techUsed: ['Flutter', 'Dart', 'MongoDB'],
        githubLink: 'https://github.com/jesse-jacks0n/Flutter-HR-Desktop-Application.git',
        pdfLink: '/pdfs/flutterdesktop.pdf',
    },
    {
        title: 'Flutter desktop app: Law Office Document Organizer',
        description: 'A modern Flutter desktop app built for legal professionals to securely organize and manage documents with ease. Powered by Supabase, it supports real-time syncing, user authentication, and secure cloud-backed storage. ',
        imageUrl: '/images/lodo.png',
        techUsed: ['Flutter', 'Dart', 'supabase'],
        githubLink: 'https://github.com/jesse-jacks0n/lodo',
        pdfLink: '/pdfs/flutterdesktop.pdf',
    },

    {
        title: 'Portfolio Website',
        description: 'This personal portfolio website showcasing my skills, projects, and experience. Developed using React and hosted on Firebase.',
        imageUrl: '/images/portfolio.png',
        techUsed: ['React', 'Firebase'],
        githubLink: 'https://github.com/jesse-jacks0n/portfolio',
        pdfLink: '/pdfs/project1.pdf',
    }, {
        title: 'Finda Website (Nextjs, Supabase, Shadcn)',
        description: 'A Website for finding local businesses and services. Built using Next.js, Prisma, and Supabase for backend services.',
        imageUrl: '/images/finda.png',
        techUsed: ['Next.js', 'Supabase'],
        githubLink: 'https://finda.co.ke',
        pdfLink: '/pdfs/project1.pdf',
    },

    {
        title: 'Simple BMI Calculator with Flutter',
        description: 'A basic Body Mass Index (BMI) calculator mobile app created with Flutter and Dart for quick and easy BMI calculations.',
        imageUrl: '/images/bmi.png',
        techUsed: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/jesse-jacks0n/BMI',
        pdfLink: '/pdfs/project1.pdf',
    },
    {
        title: 'Freelancer Website with React and Firebase',
        description: 'A freelance services website built using React for the frontend and Firebase for authentication and backend services.',
        imageUrl: '/images/freelance.png',
        techUsed: ['React', 'Firebase'],
        githubLink: 'https://github.com/jesse-jacks0n/freelance.git',
        pdfLink: '/pdfs/project1.pdf',
    },
];

const AllProjects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        AOS.init();
    }, []);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-medium mb-6 mx-6">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white mx-2 border mb-4 border-gray-100 shadow-lg shadow-gray-200 p-6"
                        data-aos="fade-right" // Add this attribute for the animation
                        data-aos-duration="800" // You can adjust duration as you like
                    >

                        <div id="pdf-content">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                onClick={() => openModal(project.imageUrl)}
                                className="w-full h-40 object-cover mb-4 cursor-pointer hover:shadow-lg"
                            />
                            <h3 className="project-title text-lg font-medium">{project.title}</h3>
                            {/*<div className="flex flex-wrap gap-2 mb-4">*/}
                            {/*    {project.techUsed.map((tech, techIndex) => {*/}
                            {/*        // ... (existing tech cases)*/}
                            {/*    })}*/}
                            {/*</div>*/}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                        <div className="flex items-center justify-between gap-2">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                               className="text-blue-500 flex items-center gap-2">
                                <img src="/icons/social.png" className="w-8"/> GitHub
                            </a>
                            {/*<a href={project.pdfLink} download className="bg-gray-100 text-white p-2 rounded-full hover:shadow-lg">*/}
                            {/*    <img src="/icons/pdf.png" className="w-6"/>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div onClick={closeModal}
                     className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-white px-4 py-2 pb-4 w-3/4 rounded-lg flex flex-col items-end">
                        <button className="mb-2 text-white w-fit rounded-full" onClick={closeModal}>
                            <img src="/icons/close.png" className="w-14"/>
                        </button>
                        <img src={selectedImage} alt="Full Image" className="w-full" onClick={closeModal}/>
                    </div>
                </div>
            )}
        </div>
    );

};

export default AllProjects;

