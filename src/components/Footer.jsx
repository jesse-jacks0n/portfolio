import React from "react";
import ContactComponent from "./ContactComponent";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                {/* First Column */}
                <div className="w-full flex gap-6 items-center mt-6 justify-center md:w-1/3 lg:w-1/4">
                    <h3 className="text-lg font-bold mb-4 cursor-pointer"  onClick={() => window.location.href = "/projects"}>Projects</h3>
                    <h3 className="text-lg font-bold mb-4 cursor-pointer"  onClick={() => window.location.href = "/about"}>About</h3>
                    <h3 className="text-lg font-bold mb-4 cursor-pointer"  onClick={() => window.location.href = "/contact"}>Contact</h3>
                </div>

                {/* Second Column */}
                <div className="w-full flex items-center justify-center mt-6 md:w-1/3 lg:w-1/4">
                    <ContactComponent />
                </div>

                {/* Third Column */}
                <div className="w-full flex items-center justify-center mt-6 md:w-1/3 lg:w-1/4">
                    {/* Replace 'YourLogo' with your actual logo component or image */}
                    <img src="/icons/menu.png" alt="Your Logo" className="w-16 h-16 object-contain" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
