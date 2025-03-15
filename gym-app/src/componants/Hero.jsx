import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-white text-center bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-900">

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>


            <div className="relative z-10 p-6 max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-extrabold animate-slide-in">
                    Get <span className="text-yellow-400">Stronger</span>, Fitter, Faster!
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Achieve your fitness goals with expert trainers and state-of-the-art equipment.
                </p>
                <Link to="/Pricing">
                    <button className="mt-6 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300">
                        Join Now
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
