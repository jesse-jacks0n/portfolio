import React from "react";
import Footer from "../components/Footer";
import AllProjects from "../components/AllProjects";

export default function Projects(){
    return (
        <div className="h-screen">
            <div className=" bg-black flex items-center justify-center w-full">
                <div className=" bg-black flex justify-end pt-8 w-screen max-w-screen-xl mx-8">
                    <img className="" src="/icons/menu.png" alt="menu" width="52" height="52"/>
                </div>
            </div>
            <div className="h-3/4 bg-black flex flex-col items-center justify-center text-white">

                <h1 className=" name text-5xl font-medium sm:text-9xl">MY PROJECTS</h1>
                <h1 className=" role text-xl sm:text-3xl mt-6 ">MADE WITH LOVE</h1>
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
