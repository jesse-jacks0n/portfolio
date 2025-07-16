import React, {useEffect} from "react";
import Footer from "../components/Footer";
import AOS from 'aos';

export default function About() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (<div className="h-screen">
            <div className=" bg-black flex items-center justify-center w-full">
                <div className=" bg-black flex justify-start pt-8 w-screen max-w-screen-xl mx-8">
                    <img className="filter brightness-0 grayscale invert" src="/icons/home.png" alt="menu" width="42"
                         height="42"
                         onClick={() => window.location.href = "/"}/>
                </div>
            </div>
            <div className="h-3/4 bg-black flex flex-col items-center justify-center text-white">

                <h1 className=" name text-5xl font-medium sm:text-9xl" data-aos="fade-up" // Add this attribute for the animation
                    data-aos-duration="400">ABOUT ME</h1>
                <h1 className=" role text-xl sm:text-3xl mt-6 " data-aos="fade-up" // Add this attribute for the animation
                    data-aos-duration="600">IT’S A-ME, JESSE!</h1>
            </div>
            <section>
                <div className="h-fit flex flex-col mx-8 xl:mx-44 2xl:mx-96 text-black max-w-screen-xl text-sm " data-aos="zoom-out-up" data-aos-duration="600" >
    <h2 className="my-4 text-black font-bold text-lg">My Background</h2>
    <p>
        I am a computer science graduate with a passion for technology and a solid foundation in algorithms and programming. My experience includes applying theoretical knowledge in practical scenarios through a diverse skill set as a software engineer, covering the entire development lifecycle.
    </p>
    <br/>
    <p>
        Committed to continuous learning and collaboration, I recognize the value of teamwork in solving complex challenges. I aim to contribute my skills to the software engineering field and make an impact on technology.
    </p>

    <h2 className="my-4 text-black font-bold text-lg">My Hobbies and Interests</h2>
    <p>
        I enjoy literature, finding joy in reading novels and poetry. Outdoor activities like hiking and biking rejuvenate me, while music provides solace and inspiration, often intertwined with my love for diverse cuisines.
    </p>
    <br/>
    <p>
        I also believe in giving back through community engagement and volunteer work, focusing on digital literacy initiatives. This blend of interests helps maintain a balanced and fulfilling lifestyle.
    </p>
</div>
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
