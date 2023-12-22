import React from "react";
import {Link} from "react-router-dom";
import ContactComponent from "../components/ContactComponent";

export default function Hero() {

    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="sm:w-3/4 flex flex-col  max-h-fit md:flex-row gap-6 mx-auto justify-between max-w-6xl ">
                {/* First Column */}
                <div className="link-parent flex items-start  ">
                    <div className="mt-6">
                        <h1 className="text-lg gap-x-2 font-bold -rotate-90 text-gray-700">MENU</h1>
                    </div>

                    <div className="flex flex-col items-start sm:text-7xl text-5xl font-bold gap-y-4 ml-2">
                        <Link to={"/home"}
                              className="hover:text-gray-700  ">HOME</Link>
                        <Link to={"/projects"}
                              className="hover:text-gray-700  ">PROJECTS</Link>
                        <Link to={"/about"}
                              className="hover:text-gray-700 ">ABOUT</Link>
                        <Link to={"/contact"}
                              className="hover:text-gray-700 ">CONTACT</Link>
                    </div>
                </div>

                {/* Second Column */}
                <ContactComponent/>
            </div>

        </div>


    );
}

