    import React from 'react';

    const UpcomingTournaments = () => {
    const tournaments = [
        { name: 'Summer League 2024', date: 'June 10, 2024' },
        { name: 'Winter Bash 2024', date: 'December 5, 2024' },
    ];

    return (
        <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Upcoming Tournaments</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{tournament.name}</h3>
                <p className="text-gray-700">Date: {tournament.date}</p>
            </div>
            ))}
        </div>
        </section>
    );
    };

    export default UpcomingTournaments;
