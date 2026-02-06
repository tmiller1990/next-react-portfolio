import React, { useState, useEffect, useMemo } from 'react';

// Props interface accepting an array of strings
interface WordMorphProps {
    phrases: string[];
    displayDuration?: number; // How long to show each word in ms
    transitionDuration?: string; // Tailwind class for transition speed (e.g., 'duration-700')
}

const WordMorph: React.FC<WordMorphProps> = ({
                                                 phrases,
                                                 displayDuration = 3000, // Default 3 seconds per word
                                                 transitionDuration = 'duration-700'
                                             }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 1. The Timer Loop
    useEffect(() => {
        // Set up an interval to cycle through the words
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, displayDuration);

        // Cleanup interval on unmount
        return () => clearInterval(intervalId);
    }, [phrases.length, displayDuration]);


    // 2. Layout Shift Prevention
    // Find the longest phrase to ensure the container width doesn't jump around.
    // useMemo ensures we don't recalculate this on every render.
    const longestPhrase = useMemo(() => {
        return phrases.reduce((a, b) => (a.length > b.length ? a : b), '');
    }, [phrases]);


    return (
        // The container must be relative so the absolute children stack inside it.
        // inline-flex keeps it in place without breaking to a new line.
        <span className="relative inline-flex h-[1.5em] overflow-hidden whitespace-nowrap">

            {/*
               INVISIBLE SPACER:
               This is a hack to ensure the container maintains the width/height
               of the widest possible phrase, preventing layout shift on the page.
            */}
            <span className="text-xl invisible" aria-hidden="true">
                {longestPhrase}
            </span>

            {/* THE PHRASES STACK */}
            {phrases.map((phrase, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={phrase}
                        // Absolute positioning stacks them on top of each other.
                        // We animate opacity, blur, scale, and vertical position (translate-y).
                        className={`text-xl absolute left-0 top-0 flex h-full w-full items-center transition-all ease-in-out ${transitionDuration}
                            ${isActive
                            ? 'opacity-100 blur-0 transform translate-y-0 scale-100 text-theme-content' // Active state (clear, centered, theme color)
                            : 'opacity-0 blur-sm transform translate-y-4 scale-95 text-theme-two'  // Inactive state (blurry, pushed down, slightly shrunk)
                        }
                        `}
                    >
                        {phrase}
                    </span>
                );
            })}
        </span>
    );
};

export default WordMorph;