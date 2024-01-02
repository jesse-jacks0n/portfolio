import React from "react";

export default function ContactComponent(){
    return (
        <div className="email flex flex-col  items-start justify-end text-lg mx-6  ">
            <p className={"flex gap-2 items-center"}> <img className={"w-6 h-6"} src={"/icons/mail.png"}/>amamjesse@gmail.com</p>
            <p className={"flex gap-2 items-center"}> <img className={"w-6 h-6"} src={"/icons/phone.png"}/>+254 793 722 829</p>

        </div>
    );
}
