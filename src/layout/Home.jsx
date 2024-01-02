import React from "react";
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

export default function Home() {
    return (
        <div className="h-screen  ">
            <div className=" bg-black flex items-center justify-center w-full">
                <div className=" bg-black flex justify-start pt-8 w-screen max-w-screen-xl mx-8">
                    <img className="filter brightness-0 grayscale invert" src="/icons/home.png" alt="menu" width="42" height="42"
                         onClick={() => window.location.href = "/"}/>
                </div>
            </div>

            <div className="h-3/4 bg-black flex flex-col items-center justify-center text-white">

                <h1 className=" name text-5xl font-medium sm:text-9xl">Jesse Jackson</h1>
                <h1 className=" role text-xl sm:text-3xl mt-6 ">Software Engineer</h1>
            </div>
            <div className="h-fit  flex flex-col mx-8 xl:mx-44 2xl:mx-96 text-black max-w-screen-xl ">

                <h1 className=" mt-8 text-3xl font-medium ">About me</h1>
                <h1 className=" text-md">Hello! I'm Jesse, a passionate and detail-oriented Computer Science graduate
                    with a strong foundation in software development and a genuine enthusiasm for technology.
                    My academic journey has equipped me with a diverse skill set and a thirst for continuous learning.
                    As a passionate and skilled Software Engineer, I bring creative solutions to life through website
                    and mobile app development.
                    Explore my portfolio to discover a showcase of my skills, projects, and experiences.
                    Let's collaborate and innovate together.</h1>

                <h1 className=" mt-8 text-3xl font-medium ">My Skills</h1>
                <div className="grid grid-cols-2 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <h3 className="flex items-center text-sm gap-2"><Css/> CSS</h3>
                    <h3 className="flex items-center text-sm gap-2"><Html/> HTML</h3>
                    <h3 className="flex items-center text-sm gap-2"><Tailwind/> Tailwind</h3>
                    <h3 className="flex items-center text-sm gap-2"><Python/> Python</h3>
                    <h3 className="flex items-center text-sm gap-2"><CSharp/> C#</h3>
                    <h3 className="flex items-center text-sm gap-2"><Kotlin/> Kotlin</h3>
                    <h3 className="flex items-center text-sm gap-2"><Java/> Java</h3>
                    <h3 className="flex items-center text-sm gap-2"><Dart/> Dart</h3>
                    <h3 className="flex items-center text-sm gap-2"><Flutter/> Flutter</h3>
                    <h3 className="flex items-center text-sm gap-2"><Firebase/> Firebase</h3>
                    <h3 className="flex items-center text-sm gap-2"><MongoDB/> MongoDB</h3>
                    <h3 className="flex items-center text-sm gap-2"><JavaScript/> JavaScript</h3>
                    <h3 className="flex items-center text-sm gap-2"><Reacct/> ReactJS</h3>
                    <h3 className="flex items-center text-sm gap-2"><TypeScript/> TypeScript</h3>
                    <h3 className="flex items-center text-sm gap-2"><NodeJS/> NodeJS</h3>
                    <h3 className="flex items-center text-sm gap-2"><NextJS/> NextJS</h3>
                </div>

            </div>

            <section>
                <Projects/>
                <div className="my-10 mx-8 flex flex-col gap-6 items-center justify-center text-xs sm:text-md sm:gap-10 sm:flex-row">
                    <div className=" flex items-center justify-center bg-gray-200 px-10 py-4 w-full sm:w-fit cursor-pointer hover:bg-gray-300"
                    onClick={() => window.location.href = "/projects"}
                    >
                        <img className="w-8" src="/icons/arrow.png" alt="projects"/>All Projects</div>
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
