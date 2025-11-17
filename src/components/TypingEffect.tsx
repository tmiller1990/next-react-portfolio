// components/TypingEffect.tsx

import React, { useState, useEffect } from 'react';

// Props for the component
interface TypingEffectProps {
    text: string;
    typingSpeed?: number; // Speed in milliseconds per character
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, typingSpeed = 70 }) => {
    // 1. State to hold the current typed portion of the text
    const [typedText, setTypedText] = useState('');
    // 2. State to hold the index of the character currently being typed
    const [index, setIndex] = useState(0);

    // Effect to handle the typing animation loop
    useEffect(() => {
        // Check if we've reached the end of the text
        if (index < text.length) {
            // Set a timer to run the next character after typingSpeed milliseconds
            const timeoutId = setTimeout(() => {
                setTypedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, typingSpeed);

            // Cleanup function: clears the timeout if the component unmounts or state changes
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, typingSpeed]);

    // --- Rendering Logic ---

    // Split the typed text and the next character for styling
    const typedLength = typedText.length;
    const typedPart = text.substring(0, typedLength - 1); // Faded content
    const newChar = text.charAt(typedLength - 1);           // Currently typing character

    return (
        <p className="text-xl font-normal whitespace-pre">
            {/* The whitespace-pre utility is important to ensure the text
        doesn't jump around before the full text is rendered.
      */}

            {/* 1. Fully typed and faded content */}
            <span className="text-theme-content transition-colors duration-500 ease-in-out">
        {typedPart}
      </span>

            {/* 2. The currently typing character (bright theme-two) */}

            <span className="text-theme-two font-medium">
        {newChar}
      </span>

            {/* 3. The blinking cursor - visible when typing is active */}
            {index < text.length && (
                <span className="text-theme-two font-medium animate-pulse">|</span>
            )}

        </p>
    );
};

export default TypingEffect;