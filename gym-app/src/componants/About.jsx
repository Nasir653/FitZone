import React from "react";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-800 text-white px-6">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
                    About <span className="text-yellow-400">FitZone</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    Welcome to <span className="font-semibold text-yellow-400">FitZone</span>, where fitness meets passion! Our mission is to empower individuals to lead healthier lives by providing top-notch facilities, expert trainers, and a motivating environment.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">

                    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-3">Our Mission</h3>
                        <p className="text-gray-200">
                            At FitZone, we believe that fitness is not just a goal—it's a lifestyle. Our mission is to help you build strength, endurance, and confidence through personalized training programs.
                        </p>
                    </div>


                    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-3">What Makes Us Unique?</h3>
                        <p className="text-gray-200">
                            We offer state-of-the-art equipment, expert trainers, and a community-driven environment. Whether you're a beginner or a pro, our diverse programs cater to all fitness levels.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
