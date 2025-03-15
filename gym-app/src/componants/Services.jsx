import React from "react";

const services = [
    {
        title: "Strength Training",
        description: "Build muscle and increase strength with expert-guided workouts.",
        img: "https://media.istockphoto.com/id/601902710/photo/closeup-of-weightlifter-clapping-hands-before-barbell-workout-a.jpg?s=612x612&w=0&k=20&c=0rknDe7xm1zefbQddglWR8xeKRrY4ue4Vhd737kpC2E=",
    },
    {
        title: "Cardio Fitness",
        description: "Boost your endurance and heart health with high-intensity cardio sessions.",
        img: "https://images.herzindagi.info/image/2022/May/fun-cardio-workout.jpg",
    },
    {
        title: "Yoga & Meditation",
        description: "Improve flexibility and mental well-being with our yoga sessions.",
        img: "https://media.istockphoto.com/id/1483989816/photo/adult-arab-male-with-a-ponytail-meditating-in-a-yoga-class.jpg?s=612x612&w=0&k=20&c=FTkO8dit_ZWB_9mUk2bmkELm2mpC-NqH82nCmK1Wx6M=",
    },
    {
        title: "HIIT Workouts",
        description: "Maximize fat loss and build endurance with high-intensity interval training.",
        img: "https://hips.hearstapps.com/hmg-prod/images/athletes-doing-push-ups-with-dumbbells-on-floor-royalty-free-image-1638463573.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    },
    {
        title: "Personal Training",
        description: "Get one-on-one coaching tailored to your fitness goals.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuP8aUcQY5y29h6O6jyFKNl01HeYdYePKWPQ&s",
    },
    {
        title: "Group Classes",
        description: "Stay motivated by joining our group fitness sessions with expert trainers.",
        img: "https://media.istockphoto.com/id/1207041834/photo/group-of-young-happy-fit-people-doing-exercises-in-gym.jpg?s=612x612&w=0&k=20&c=3LkL97NzJct4YwSNc_X70FEX9uH-BkKBMY9Vgy1O5sg=",
    },
];

const Services = () => {
    return (
        <section id="services" className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
                    Our <span className="text-yellow-400">Fitness Programs</span>
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img src={service.img} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold text-yellow-400">{service.title}</h3>
                            <p className="text-gray-300 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
