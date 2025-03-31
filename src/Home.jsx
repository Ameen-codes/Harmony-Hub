import { useState } from "react";
import hh from './assets/hh.jpg'
import Navbar from "./Navbar";

const Home = () => {

  return (
    <>
    <Navbar />
    
    <div className="min-h-screen bg-black text-white font-sans mt-[100px]">

      {/* Hero Section */}
      <section className="text-center flex flex-col items-center justify-center min-h-[60vh] p-6 bg-[url('src/assets/hh.jpg')] bg-cover bg-center" >

        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 drop-shadow-lg py-2">
          🎵 The Future of Music Ownership is Here
        </h2>

        <p className="text-yellow-300 mt-2 text-lg">Mint. Collect. Stream. Earn.</p>

        <p className="text-yellow-400 mt-4 max-w-xl">
          Empowering artists & fans through Web3 & NFTs
        </p>

        <div className="mt-6 space-x-4">

          <button className="bg-gradient-to-r from-yellow-500 to-orange-600 px-6 py-3 rounded-lg text-white font-bold hover:opacity-90 transition">
            Get Started
          </button>
          
          <button className="border-2 border-yellow-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-yellow-500 hover:text-black transition">
            Explore Marketplace
          </button>

        </div>
        
      </section>

      {/* Features Section */}
      <section className="mt-12 px-6">

        <h3 className="text-center text-3xl font-bold text-white-400 mb-6">Why Harmony Hub?</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="p-6 bg-gray-900 rounded-lg text-center shadow-lg">
            <h4 className="font-bold text-lg text-white-300">🎼 Mint Your Music</h4>
            <p className="text-gray-400 mt-2">Turn your tracks into valuable NFTs.</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg text-center shadow-lg">
            <h4 className="font-bold text-lg text-white-300">💰 Earn Royalties</h4>
            <p className="text-gray-400 mt-2">Automated payments per resale.</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg text-center shadow-lg">
            <h4 className="font-bold text-lg text-white-300">🔊 Decentralized Streaming</h4>
            <p className="text-gray-400 mt-2">Artists get paid per stream.</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg text-center shadow-lg">
            <h4 className="font-bold text-lg text-white-300">🌍 Community Driven</h4>
            <p className="text-gray-400 mt-2">Playlists & live engagement.</p>
          </div>

        </div>
        

      </section>

      


      <footer className="mt-12 p-6 text-center text-gray-400 border-t border-gray-700">

        <p>© 2025 Harmony Hub | All Rights Reserved</p>

      </footer>

    </div>

    </>

  );
}

export default Home;