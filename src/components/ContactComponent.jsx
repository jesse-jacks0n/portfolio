import React, {useEffect} from "react";
import AOS from 'aos';
export default function ContactComponent(){
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="email flex flex-col  items-start justify-end text-lg mx-6  " data-aos="fade-right" // Add this attribute for the animation
             data-aos-duration="1300">
            <p className={"flex gap-2 items-center"}> <img className={"w-6 h-6"} src={"/icons/mail.png"}/>amamjesse@gmail.com</p>
            <p className={"flex gap-2 items-center"}> <img className={"w-6 h-6"} src={"/icons/phone.png"}/>+254 793 722 829</p>

        </div>
    );
}
