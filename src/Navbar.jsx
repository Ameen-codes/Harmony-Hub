import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [connected, setConnected] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 z-50 flex justify-between items-center p-4 ">

            <Link to="/" className="text-2xl font-bold text-white">Harmony Hub</Link>

            <nav className="space-x-6 hidden md:flex">
                
                <Link to="/melodyMints" className="hover:text-yellow-400 transition-colors">Melody Mints</Link>

                <Link to="/chordCollective" className="hover:text-yellow-400 transition-colors">Chord Collective</Link>

                <Link to="/soundStream" className="hover:text-yellow-400 transition-colors">Sound Stream</Link>

                <input type="search" name="" id="" placeholder="search..." className="border-red-400"/>

            </nav>

            <button 
                onClick={() => setConnected(!connected)} 
                className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >              
                <FaWallet /> 

                <span>{connected ? "Connected" : "Connect Wallet"}</span>

            </button>
            
        </header>
    );
};

export default Navbar;
