import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "./assets/logo.png"

const Navbar = () => {
  const [connected, setConnected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="justify-between gap-3 fixed top-0 left-0 w-full bg-gray-900 z-50 flex items-center p-4">

      <Link to="/" className="logo">Harmony Hub</Link>

      {/* Navbar for larger screens */}
      <nav className="space-x-6 hidden md:flex items-center">
        
        <Link to="/MelodyMints" className="hover:text-yellow-400 focus:text-blue-500  transition-colors">Melody Mints</Link>

        <Link to="/ChordCollective" className="hover:text-yellow-400 transition-colors">Chord Collective</Link>

        <Link to="/SoundStream" className="hover:text-yellow-400 transition-colors">Sound Stream</Link>

        <input type="search" name="" id="" placeholder="search..." className="border-red-400" />
        <a href="#" className="font-bold">Premium</a>
        
        <FaBell />

      </nav>

      <input type="search" name="" id="" placeholder="search..." className="border-red-400 w-full md:hidden" />


      {/* Hamburger Icon  */}

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        
        {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}

      </button>

      <button className="cw hidden md:block"> Connect Wallet  </button>



      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-800 text-white p-4`}>
        
        <nav className="space-y-4">

          <Link to="/MelodyMints" className="block hover:text-yellow-400 transition-colors">Melody Mints</Link>

          <Link to="/ChordCollective" className="block hover:text-yellow-400 transition-colors">Chord Collective</Link>

          <Link to="/SoundStream" className="block hover:text-yellow-400 transition-colors">Sound Stream</Link>

          <a href="#" className="block font-bold">Premium</a>
          
          <span className="cw">{connected ? "Connected" : "Connect Wallet"}</span>
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
