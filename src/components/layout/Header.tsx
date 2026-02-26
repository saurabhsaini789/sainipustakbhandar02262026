import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'School Books', path: '/category/school-books' },
        { name: 'Competitive Exams', path: '/category/competitive-exams' },
        { name: 'Stationery', path: '/category/stationery' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-secondary border-b border-primary/10 shadow-sm">
            {/* Top Bar - Contact Info */}
            <div className="hidden md:flex bg-primary text-secondary py-2 px-4 justify-between items-center text-sm">
                <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                        <Phone size={14} className="mr-2" /> +91 7419150418
                    </span>
                    <span className="flex items-center">
                        <MapPin size={14} className="mr-2" /> Visit our store in Chhachhrauli
                    </span>
                </div>
                <div>
                    <span className="font-semibold text-accent">Trusted Learning Partner Since 1996</span>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex flex-col">
                            <span className="font-heading text-2xl font-bold text-primary leading-none">
                                Saini Pustak Bhandar
                            </span>
                            <span className="text-xs text-dark/70 font-medium tracking-wider mt-1">
                                EST. 1996
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-dark hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-dark hover:text-primary focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-secondary shadow-lg border-b border-primary/10">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-3 text-base font-medium text-dark hover:text-primary hover:bg-white rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-primary/10 flex flex-col space-y-3 px-3">
                            <a
                                href="https://wa.me/917419150418"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full bg-primary text-secondary px-4 py-2 rounded-lg font-semibold"
                            >
                                Order on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
