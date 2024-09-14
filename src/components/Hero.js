import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/hero-8.jpeg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full">
        <h1 className="text-4xl font-bold">Unleashing the Spirit of Cricket</h1> {/* Updated heading */}
        <p className="mt-4 text-lg">
          Join the most thrilling cricket leagues, showcase your skills, and become a legend. 
          From local tournaments to national championships, we bring cricket excitement to your fingertips.
        </p> {/* Updated description */}
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            Register Now {/* Updated button */}
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            View Tournaments {/* Updated button */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
