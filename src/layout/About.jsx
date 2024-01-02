import React from "react";
import Footer from "../components/Footer";

export default function About() {
    return (<div className="h-screen">
            <div className=" bg-black flex items-center justify-center w-full">
                <div className=" bg-black flex justify-start pt-8 w-screen max-w-screen-xl mx-8">
                    <img className="filter brightness-0 grayscale invert" src="/icons/home.png" alt="menu" width="42"
                         height="42"
                         onClick={() => window.location.href = "/"}/>
                </div>
            </div>
            <div className="h-3/4 bg-black flex flex-col items-center justify-center text-white">

                <h1 className=" name text-5xl font-medium sm:text-9xl">ABOUT ME</h1>
                <h1 className=" role text-xl sm:text-3xl mt-6 ">IT’S A-ME, JESSE!</h1>
            </div>
            <section>
                <div className="h-fit  flex flex-col mx-8 xl:mx-44 2xl:mx-96 text-black max-w-screen-xl text-sm ">
                    <h2 className="my-4 text-black font-bold text-lg">My Background</h2>
                    <p>
                        Born with an innate curiosity for technology, my journey into the world of computer science
                        began with a fascination for how software could shape the future. I am a proud computer science
                        graduate, having navigated the intricacies of algorithms, data structures, and programming
                        languages to earn a solid foundation in the theoretical underpinnings of the field. Throughout
                        my academic pursuits, I consistently sought out opportunities to apply classroom knowledge in
                        real-world scenarios, reinforcing theoretical concepts with practical, hands-on experience
                    </p>
                    <br/>
                    <p>
                        As a software engineer, my professional trajectory has been marked by a commitment to excellence
                        and a passion for creating solutions that transcend mere code. I have cultivated a diverse skill
                        set, proficient in multiple programming languages and frameworks, allowing me to adapt
                        seamlessly to the ever-evolving landscape of technology. My experience spans the entire software
                        development lifecycle, from conceptualization and design to implementation and maintenance. This
                        holistic approach has equipped me with a deep understanding of the nuanced challenges that
                        software engineers face, fostering a problem-solving mindset that I bring to every project.
                    </p>
                    <br/>
                    <p>
                        Beyond the technical realm, my journey in computer science has been shaped by a commitment to
                        continuous learning and a collaborative spirit. I thrive in environments that encourage
                        knowledge sharing and teamwork, recognizing the power of collective intelligence in overcoming
                        complex challenges. With a blend of academic excellence and practical experience, I am poised to
                        contribute my skills and passion to the forefront of software engineering, eager to leave a
                        lasting impact on the technological landscape.
                    </p>

                    <h2 className="my-4 text-black font-bold text-lg ">
                        My Hobbies and Interests
                    </h2>
                    <p>Outside the realm of coding and software development, I find joy in a diverse array of hobbies
                        and interests that contribute to a well-rounded and fulfilling life. One of my primary passions
                        is exploring the world through literature. Whether it's diving into the pages of a
                        thought-provoking novel, exploring the intricacies of non-fiction, or enjoying the creativity of
                        poetry, I believe in the power of words to expand horizons and foster empathy.</p>
                    <br/>
                    <p> In the realm of physical activity, I'm an avid enthusiast of outdoor adventures. Hiking, biking,
                        and camping are not just recreational activities for me; they are avenues for rejuvenation and a
                        means to connect with the natural world. The sense of accomplishment that comes from conquering
                        a challenging trail or the peace found in a quiet campsite fuels my energy and creativity.</p>
                    <p>Music is another cornerstone of my life. I appreciate a wide range of genres, and whether it's
                        playing an instrument or attending live performances, I find solace and inspiration in the
                        melodies and rhythms that accompany different moments in life. This passion for music often
                        extends to exploring the rich diversity of global cuisines, as I believe that both music and
                        food offer unique insights into the cultural tapestry of our world.</p>
                    <br/>
                    <p>Beyond these interests, I am a firm believer in giving back to the community. Engaging in
                        volunteer work, particularly in initiatives that promote digital literacy or support
                        underprivileged communities, allows me to use my skills to make a positive impact. Through this
                        combination of intellectual pursuits, outdoor adventures, artistic appreciation, and community
                        engagement, I strive to maintain a balanced and fulfilling lifestyle that enriches both my
                        personal and professional endeavors.</p>
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
