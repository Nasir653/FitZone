import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 text-center md:text-left">


                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-yellow-400">FitZone 💪</h2>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaFacebook size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaInstagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaTwitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><FaLinkedin size={24} /></a>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
                            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
                            <li><a href="#pricing" className="hover:text-yellow-400">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-yellow-400">Contact Info</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li>Email: Malikaadi653@gmail.com</li>
                            <li>Phone: +91 6006348676</li>
                            <li>Delhi</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-yellow-400">Subscribe</h3>
                        <p className="mt-2 text-gray-400">Get updates on new programs & offers.</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-3 w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
                        />
                        <button className="w-full bg-yellow-400 text-black font-bold py-2 mt-2 rounded hover:bg-yellow-500 transition">
                            Subscribe
                        </button>
                    </div>
                </div>


                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
                    © 2025 FitZone. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
