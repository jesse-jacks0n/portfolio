import React, {useState} from 'react';

const projects = [
    {
        title: 'Flutter Desktop App with MongoDB',
        description: 'A cross-platform desktop application built using Flutter and Dart, featuring MongoDB for data storage.',
        imageUrl: '/images/project1.png',
        techUsed: ['Flutter', 'Dart', 'MongoDB'],
        githubLink: 'https://github.com/jesse-jacks0n/Flutter-HR-Desktop-Application.git',
        pdfLink: '/pdfs/flutterdesktop.pdf',
    },

    {
        title: 'Portfolio Website',
        description: 'This personal portfolio website showcasing my skills, projects, and experience. Developed using React and hosted on Firebase.',
        imageUrl: '/images/portfolio.png',
        techUsed: ['React', 'Firebase'],
        githubLink: 'https://github.com/jesse-jacks0n/portfolio',
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
    {
        title: 'Simple BMI Calculator with Flutter',
        description: 'A basic Body Mass Index (BMI) calculator mobile app created with Flutter and Dart for quick and easy BMI calculations.',
        imageUrl: '/images/bmi.png',
        techUsed: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/your-username/your-repo',
        pdfLink: '/pdfs/project1.pdf',
    },
    {
        title: 'Link Sharing App with Flutter (Private)',
        description: 'A mobile app developed using Flutter and Dart for sharing and managing links. Users can add, edit, and delete their shared links.',
        imageUrl: '/images/soci.png',
        techUsed: ['Flutter', 'Dart'],
        githubLink: 'https://github.com/your-username/your-repo',
        pdfLink: '/pdfs/project1.pdf',
    },
];

const AllProjects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white  border mb-8 border-gray-100 shadow-lg shadow-gray-200 p-6">
                        <div id="pdf-content">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                onClick={() => openModal(project.imageUrl)}
                                className="w-full h-40 object-cover mb-4 cursor-pointer hover:shadow-lg"
                            />
                            <h3 className="project-title text-lg font-medium mb-2" >{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techUsed.map((tech, techIndex) => {
                                    // ... (existing tech cases)
                                })}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                        <div className="flex items-center justify-between gap-2">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center gap-2">
                                <img src="/icons/social.png" className="w-8" /> GitHub
                            </a>
                            {/*<a href={project.pdfLink} download className="bg-gray-100 text-white p-2 rounded-full hover:shadow-lg">*/}
                            {/*    <img src="/icons/pdf.png" className="w-6"/>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-white px-4 py-2 pb-4 w-3/4 rounded-lg flex flex-col items-end">
                        <button className="mb-2 text-white w-fit rounded-full" onClick={closeModal}>
                            <img src="/icons/close.png" className="w-14" />
                        </button>
                        <img src={selectedImage} alt="Full Image" className="w-full" />
                    </div>
                </div>
            )}
        </div>
    );

};

export default AllProjects;

