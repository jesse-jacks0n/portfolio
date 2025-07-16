import React, {useEffect} from "react";
import {
    CSharp,
    Css,
    Dart,
    Firebase,
    Flutter,
    Html,
    Java, JavaScript,
    Kotlin,
    MongoDB, NextJS, NodeJS,
    Python, Reacct,
    Tailwind, TypeScript
} from "../components/svg/Svg";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AOS from 'aos';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
   const aboutMe = "Hello! I'm Jesse, a detail-oriented Computer Science graduate with a strong foundation in software development and a passion for technology. My journey has provided me with a diverse skill set and a commitment to continuous learning. As a Software Engineer, I create innovative solutions through web and mobile app development. Explore my portfolio to see my skills, projects, and experiences. Let's collaborate and innovate!";


    return (
        <div className="h-screen  ">
            <div className=" bg-black flex items-center justify-center w-full">
                <div className=" bg-black flex justify-start pt-8 w-screen max-w-screen-xl mx-8">
                    <img className="filter brightness-0 grayscale invert" src="/icons/home.png" alt="menu" width="42" height="42"
                         onClick={() => window.location.href = "/"}/>
                </div>
            </div>

            <div className="h-3/4 bg-black flex flex-col items-center justify-center text-white">

                <h1 className=" name text-5xl font-medium sm:text-9xl"  data-aos="fade-up" // Add this attribute for the animation
                    data-aos-duration="400">Jesse Jackson</h1>
                <h1 className=" role text-xl sm:text-3xl mt-6 " data-aos="fade-up" // Add this attribute for the animation
                    data-aos-duration="600">Software Engineer</h1>
            </div>
            <div className="h-fit  flex flex-col mx-8 xl:mx-44 2xl:mx-96 text-black max-w-screen-xl ">

                <h1 className=" mt-8 text-3xl font-medium ">About me</h1>
                <h1 className=" text-md font-light">{aboutMe}</h1>

                <h1 className=" mt-8 text-3xl font-medium ">My Skills</h1>
                <div className="grid grid-cols-2 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 list-disc">
                    
                    <li className="flex items-center text-sm gap-2"><Html/> HTML</li>
                    <li className="flex items-center text-sm gap-2"><Tailwind/> Tailwind</li>
                    <li className="flex items-center text-sm gap-2"><Python/> Python</li>
                    <li className="flex items-center text-sm gap-2"><CSharp/> C#</li>
                    <li className="flex items-center text-sm gap-2"><Kotlin/> Kotlin</li>
                    <li className="flex items-center text-sm gap-2"><Java/> Java</li>
                    <li className="flex items-center text-sm gap-2"><Dart/> Dart</li>
                    <li className="flex items-center text-sm gap-2"><Flutter/> Flutter</li>
                    <li className="flex items-center text-sm gap-2"><Firebase/> Firebase</li>
                    <li className="flex items-center text-sm gap-2"><MongoDB/> MongoDB</li>
                    <li className="flex items-center text-sm gap-2"><JavaScript/> JavaScript</li>
                    <li className="flex items-center text-sm gap-2"><Reacct/> ReactJS</li>
                    <li className="flex items-center text-sm gap-2"><TypeScript/> TypeScript</li>
                    <li className="flex items-center text-sm gap-2"><NodeJS/> NodeJS</li>
                </div>

            </div>

            <section>
                {/*<Projects/>*/}
                <div className="my-10 mx-8 flex flex-col gap-6 items-center justify-center text-xs sm:text-md sm:gap-10 sm:flex-row">
                    <div className=" flex items-center justify-center bg-gray-200 px-10 py-4 w-full sm:w-fit cursor-pointer hover:bg-gray-300"
                    onClick={() => window.location.href = "/projects"}
                    >
                        <img className="w-8" src="/icons/arrow.png" alt="projects"/>Projects</div>
                    <div className=" flex items-center justify-center bg-gray-200 px-10 py-4 w-full sm:w-fit cursor-pointer hover:bg-gray-300"
                            onClick={() => window.location.href = "/contact"}
                    >
                        <img className="w-8" src="/icons/arrow.png" alt="contact me"/>Contact Me
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    );
}
