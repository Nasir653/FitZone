import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
                    Get In <span className="text-yellow-400">Touch</span>
                </h2>

                <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-yellow-400">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-left text-gray-300 text-lg font-semibold">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 mt-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="block text-left text-gray-300 text-lg font-semibold">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 mt-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="block text-left text-gray-300 text-lg font-semibold">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Enter your message"
                                className="w-full px-4 py-3 mt-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
