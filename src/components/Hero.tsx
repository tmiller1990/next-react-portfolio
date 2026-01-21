'use client'
import React from "react";
import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";

const Hero = () => {
    return (

        <section id="home"
                 className="flex flex-col items-center md:flex-row md:items-start p-8 mb-4">

            <Image
                src="/images/profile/grayscale.jpg"
                alt="Grayscale profile picture of Tyler; he's not bad looking"
                width={80}
                height={80}
                className="rounded-full object-cover mb-6 md:mb-0 md:mr-8 "
                priority
            />

            <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-theme-content mb-2">Hello, I'm Tyler!</h1>

                <TypingEffect text="Developer | Tinkerer | Maker "/>

                <p className="text-sm text-theme-content/80 mt-4 max-w-xl">
                    I'm a Denver-based developer and new BS in Computer Science graduate (Jan 2026). I like
                    to build new things, and I thrive when I have a challenging problem to solve. Check out my portfolio
                    of projects below, and drop me a line if you'd like to chat.
                </p>

            </div>
        </section>

    )
}
export default Hero;