import React from "react";

const pricingPlans = [
    {
        title: "Basic Plan",
        price: "$19.99/mo",
        features: ["Access to gym", "Cardio & Strength Training", "Locker Room Access"],
    },
    {
        title: "Standard Plan",
        price: "$39.99/mo",
        features: ["All Basic Plan features", "Group Classes", "Sauna & Steam Room"],
    },
    {
        title: "Premium Plan",
        price: "$59.99/mo",
        features: ["All Standard Plan features", "Personal Trainer", "Diet Consultation", "VIP Lounge"],
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-16 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
                    Choose Your <span className="text-yellow-400">Membership</span>
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-300 border-2 border-yellow-400">
                            <h3 className="text-2xl font-bold text-yellow-400">{plan.title}</h3>
                            <p className="text-4xl font-extrabold my-4">{plan.price}</p>
                            <ul className="text-gray-300 space-y-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center justify-center space-x-2">
                                        ✅ <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-6 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
