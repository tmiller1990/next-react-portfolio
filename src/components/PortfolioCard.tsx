import Image from "next/image";
import React from "react";

interface CardProps {
    title: string;
    screenshot: string;
    blurb: string;
    //optional links:
    blurbSourceLinkText?: React.ReactNode;
    blurbSourceLinkUrl?: string;
    blurbDemoLinkText?: React.ReactNode;
    blurbDemoLinkUrl?: string;
}

const PortfolioCard = ({
                           title,
                           screenshot,
                           blurb,
                           blurbSourceLinkText,
                           blurbSourceLinkUrl,
                           blurbDemoLinkUrl,
                           blurbDemoLinkText
                       }: CardProps) => (
    <div className="block rounded-lg bg-theme-one p-1">
        <div className="overflow-hidden rounded-t-lg">
            <Image
                src={screenshot}
                alt={title}
                width={1024}
                height={1024}
                className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition duration-300 ease-in-out transform"

            />
        </div>
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-theme-content">{title}</h3>
            <p className="text-sm text-theme-content">{blurb}</p>
            <div>
            {blurbSourceLinkUrl && blurbSourceLinkText && (
                <a
                    href={blurbSourceLinkUrl}
                    className="text-sm text-theme-content hover:text-theme-two transition duration-300 ease-in-out inline-flex items-center gap-1 p-1"
                    target="_blank" //new tab
                    rel="noopener noreferrer"
                >
                    {blurbSourceLinkText}
                </a>
            )}
            </div>
            <div>
            {blurbDemoLinkUrl && blurbDemoLinkText && (
            <a
                href={blurbDemoLinkUrl}
                className="text-sm text-theme-content hover:text-theme-two transition duration-300 ease-in-out inline-flex items-center gap-1 p-1"
                rel="noopener noreferrer"
            >
                {blurbDemoLinkText}
            </a>
            )}
            </div>
        </div>
    </div>
)
export default PortfolioCard;
