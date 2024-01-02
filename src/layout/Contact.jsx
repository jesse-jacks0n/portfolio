import React from "react";
import MailMeComponent from "../components/MailMe";
import Footer from "../components/Footer";

export default function Contact(){
    return(
        <div className="h-screen">
            <div className=" bg-black flex items-center justify-center w-full">
                <div className=" bg-black flex justify-start pt-8 w-screen max-w-screen-xl mx-8">
                    <img className="filter brightness-0 grayscale invert" src="/icons/home.png" alt="menu" width="42"
                         height="42"
                         onClick={() => window.location.href = "/"}/>
                </div>
            </div>
            <div className="h-3/4 bg-black flex flex-col items-center justify-center text-white">

                <h1 className=" name text-5xl font-medium sm:text-9xl">CONTACT ME</h1>
                <h1 className=" role text-xl sm:text-3xl mt-6 ">SAY HELLO TO ME</h1>
            </div>
            <section className="h-fit  flex flex-col mx-8 xl:mx-44 2xl:mx-96 text-black max-w-screen-xl text-sm ">
                <MailMeComponent/>
            </section>
            <Footer/>
        </div>
    );
}
