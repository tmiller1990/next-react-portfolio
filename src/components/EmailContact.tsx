// components/EmailContact.tsx

import React, { useState } from 'react';

interface EmailContactProps {
    email: string;
}

const EmailContact: React.FC<EmailContactProps> = ({ email }) => {
    // State to manage the user notification message
    const [message, setMessage] = useState('Click my email to copy');

    const handleCopy = async () => {
        try {
            // 1. Use the modern Clipboard API to copy the text
            await navigator.clipboard.writeText(email);

            // 2. Set successful notification message
            setMessage('Email copied!');

            // 3. Reset the message after 2 seconds
            setTimeout(() => {
                setMessage('Click my email to copy');
            }, 2000);

        } catch (err) {
            console.error('Failed to copy text: ', err);
            setMessage('Failed to copy 😔');

            // Reset failure message
            setTimeout(() => {
                setMessage('Click my email to copy');
            }, 3000);
        }
    };

    // accessibility
    const ariaLabel = `Email address: ${email}. ${message}`;

    return (
        <button
            onClick={handleCopy}
            type="button"
            aria-label={ariaLabel}
            title={ariaLabel}
            // Styling the container: makes it look like a link but function like a button
            className="inline-flex flex-col items-center text-theme-content hover:text-theme-two transition-colors duration-300"
        >
            {/* The Feedback/Notification Message */}
            <span className="ml-3 text-sm font-light text-theme-content opacity-70 group-hover:opacity-100 transition-opacity">
        {message}
      </span>
            {/* The Email Address */}
            <span className="underline group-hover:no-underline px-1">
        {email}
            </span>
        </button>

    );
};

export default EmailContact;