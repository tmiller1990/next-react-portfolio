import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import {Rocket, FileStack} from 'lucide-react';

const projects = [
    {
        title: "SpecFlow: Renovation Decision Management",
        screenshot: "/images/portfolio/fourth-project.png",
        blurb: "SpecFlow is a real-time construction decision management platform enabling seamless collaboration between clients, designers, and general contractors through atomic state management and live data synchronization. It is built with Firestore as a real-time NoSQL document store with transactional guarantees.",
        blurbSourceLinkText: (
            <>
                <FileStack className="w-5 h-5 mr-1" />See the Source
            </>
        ),
        blurbSourceLinkUrl: "https://github.com/tmiller1990/SpecFlow/",
        blurbDemoLinkText: (
            <>
                <Rocket className="w-5 h-5 mr-1" />Launch a Demo
            </>
        ),
        blurbDemoLinkUrl: "/SpecFlow/",
    },

    {
        title: "This Portfolio Page",
        screenshot: "/images/portfolio/first-project.png",
        blurb: "\"Wherever you go, there you are.\" I built this portfolio page with Next.js and React utilizing some Tailwind theming and some nifty React components.",
        blurbSourceLinkText: (
            <>
            <FileStack className="w-5 h-5 mr-1" />See the Source
            </>
        ),
        blurbSourceLinkUrl: "/",
        blurbDemoLinkText: "",
        blurbDemoLinkUrl: "",
    },
    {
        title: "Machine Learning: Ames Housing Regression",
        screenshot: "/images/portfolio/second-project.png",
        blurb: "A python project using Pandas and Scikit-learn to build an optimized Gradient Boosting Regressor model to predict the sales price of homes. ",
        blurbSourceLinkText: (
            <>
                <FileStack className="w-5 h-5 mr-1" />See the Source
            </>
        ),
        blurbSourceLinkUrl: "https://github.com/tmiller1990/ames-housing-regression",
        blurbDemoLinkText: "",
        blurbDemoLinkUrl: "/",
    },
    {
        title: "Java Calculator",
        screenshot: "/images/portfolio/third-project.png",
        blurb: "A simple GUI calculator application written in Java with JavaFX and Maven. ",
        blurbSourceLinkText: (
            <>
                <FileStack className="w-5 h-5 mr-1" />See the Source
            </>
        ),
        blurbSourceLinkUrl: "https://github.com/tmiller1990/SimpleCalculator",
        blurbDemoLinkText: "",
        blurbDemoLinkUrl: "",
    },
]

const Portfolio = () => (



        <section id="portfolio"
                 className=" flex flex-col items-center justify-center  p-8 mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-theme-content mb-2">Portfolio of Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
                {projects.map((project, index) => (
                    <PortfolioCard key={index} {...project} />
                ))}
            </div>
        </section>


);

export default Portfolio;