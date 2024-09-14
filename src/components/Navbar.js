import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // FontAwesome icon for the profile

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-transparent text-white">
            <div className="container mx-auto px-2 py-4 flex justify-between items-center">
                <div className='flex gap-1'>
                    <Link to="/"><img alt='' ></img></Link>
                    <h1 className="text-2xl font-bold">Crickerzz</h1> {/* Updated name */}
                </div>
                <ul className="flex space-x-4">
                    <li className="hover:text-gray-300"><Link to="/">Home</Link></li>
                    <li className="hover:text-gray-300"><Link to="/registration">Registration</Link></li>
                    <li className="hover:text-gray-300"><Link to="/tournaments">Tournaments</Link></li>
                    <li className="relative group hover:text-gray-300">
                        <Link to="/profile">
                            <FaUserCircle className="text-2xl" /> {/* Profile Icon */}
                        </Link>
                        {/* Profile Text on Hover */}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Profile
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
