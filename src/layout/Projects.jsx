import React, {useEffect} from "react";
import Footer from "../components/Footer";
import AllProjects from "../components/AllProjects";
import AOS from 'aos';

export default function Projects(){
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="h-screen">
            <div className=" bg-black flex items-center justify-center w-full">
                <div className=" bg-black flex justify-start pt-8 w-screen max-w-screen-xl mx-8">
                    <img className="filter brightness-0 grayscale invert" src="/icons/home.png" alt="menu" width="42"
                         height="42"
                         onClick={() => window.location.href = "/"}/>
                </div>
            </div>
            <div className="h-3/4 bg-black flex flex-col items-center justify-center text-white">

                <h1 className=" name text-5xl font-medium sm:text-9xl"
                    data-aos="fade-up" // Add this attribute for the animation
                    data-aos-duration="400"
                >MY PROJECTS</h1>
                <h1 className=" role text-xl sm:text-3xl mt-6 "
                    data-aos="fade-up" // Add this attribute for the animation
                    data-aos-duration="600">MADE WITH LOVE</h1>
            </div>
            <section>
                <AllProjects/>
            </section>
            <section>
                <div
                    className="my-10 mx-8 flex flex-col gap-6 items-center justify-center text-xs sm:text-md sm:gap-10 sm:flex-row">

                    <div
                        className=" flex items-center justify-center bg-gray-200 px-10 py-4 w-full sm:w-fit cursor-pointer hover:bg-gray-300"
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
