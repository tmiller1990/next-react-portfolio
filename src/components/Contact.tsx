'use client'

import React from "react";
import EmailContact from "@/components/EmailContact";

const Contact = () => {
    return (



            <section id="contact"
                     className=" flex flex-col items-center md:flex-row md:justify-center md:items-center p-8 ">
                <div className="mt-0 text-2xl font-extrabold text-theme-content tracking-tight">
                    <EmailContact email="Tyler@Ty.lerMiller.com"/>
                </div>
            </section>



    )
}
export default Contact;