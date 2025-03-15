import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white p-4 shadow-lg fixed w-full top-0 z-50">


            <div className="container mx-auto flex justify-between items-center">

                <Link to="/" className="text-2xl font-bold tracking-wide">
                    FitZone
                </Link>


                <ul className="hidden md:flex space-x-6 text-lg">
                    <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
                    <li><Link to="/About" className="hover:text-yellow-300 transition">About</Link></li>
                    <li><Link to="/Services" className="hover:text-yellow-300 transition">Services</Link></li>
                    <li><Link to="/Pricing" className="hover:text-yellow-300 transition">Pricing</Link></li>
                    <li><Link to="/Contact" className="hover:text-yellow-300 transition">Contact</Link></li>
                </ul>


                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden bg-indigo-700 text-center py-3">
                    <ul className="space-y-4">
                        <li><Link to="/" className="block py-2 hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link to="/About" className="block py-2 hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link to="/Services" className="block py-2 hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link to="/Pricing" className="block py-2 hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Pricing</Link></li>
                        <li><Link to="/Contact" className="block py-2 hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
