'use client'
import React, {useState} from 'react';
import {Menu, X, Sun, Moon} from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
    {name: 'Home', href: '#home'},
    {name: 'Contact', href: '#contact'},
    {name: 'Portfolio', href: '#portfolio'},
    {name: 'Github', href: 'https://github.com/tmiller1990'},
];

const NavbarInner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-theme-one/80 backdrop-blur-sm shadow-xl rounded-2xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="#"
                           className="text-2xl font-bold text-theme-content tracking-wide hover:text-theme-two transition duration-300 ease-in-out">
                            Tyler Miller™
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-theme-content hover:text-theme-two px-3 py-2 text-md font-medium transition duration-300 ease-in-out border-1 border-transparent border-dashed hover:border-theme-two rounded-md"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-theme-content hover:text-theme-two hover:bg-theme-three transition duration-300 ease-in-out"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                    </div>

                    {/* Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-full text-theme-content hover:text-theme-three hover:bg-theme-two focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-two transition duration-300 ease-in-out"
                            aria-expanded={isOpen}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - using max-height for smooth transition */}
            <div
                className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="pt-2 pb-4 space-y-1 border-t border-gray-100">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-base font-medium text-theme-content hover:text-theme-two hover:bg-theme-three transition duration-150 ease-in-out border-l-4 border-transparent hover:border-theme-two"
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            toggleTheme();
                            handleLinkClick();
                        }}
                        className="w-full text-left px-4 py-2 text-base font-medium text-theme-content hover:text-theme-two hover:bg-theme-three transition duration-150 ease-in-out border-l-4 border-transparent hover:border-theme-two flex items-center gap-2"
                    >
                        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarInner;
