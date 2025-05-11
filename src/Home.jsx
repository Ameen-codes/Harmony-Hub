import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import hh from "./assets/hh.jpg"
import hero from "./assets/hero.jpg"
import mm2 from './assets/mm2.jpg'
import Intro from "./Intro";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from './Gallery';
const Home = () => {

  return (
    <>
    
    <div className="min-h-screen pb-9 bg-blue-700 bg-no-repeat bg-cover text-white font-sans" style={{backgroundImage:`url(${hero})`}}>
      
    <Header/>

      {/* Hero Section */}
      <section className="font-alphamusicman text-center flex flex-col items-center justify-center min-h-[60vh] p-6  bg-cover bg-center" >

        <Intro/>

        <div className="mt-6 space-x-4 space-y-4">


          {/* <Link to="/MelodyMints" className="cto_1">Dive In</Link> */}

          <span className='cto_1'>Dive In</span>

            <a href="#body" className="cto_2">
              Learn More
            </a>

        </div>
        
      </section>

      {/* Features Section */}
      <section className="mt-12 px-6 widgets">

        <h3 className="text-center text-3xl font-bold text-white-400 mb-6">Why Harmony Hub?</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className=" rounded-lg text-center shadow-lg widget">
            <h4 className="font-bold text-lg ">🎼 Mint Your Music</h4>
            <p className="text-gray-400 mt-2">Turn your tracks into valuable NFTs.</p>
          </div>

          <div className="rounded-lg text-center  widget">
            <h4 className="font-bold text-lg ">💰 Earn Royalties</h4>
            <p className="text-gray-400 mt-2">Automated payments per resale.</p>
          </div>

          <div className=" rounded-lg text-center shadow-lg widget">
            <h4 className="font-bold text-lg ">🔊 Decentralized Streaming</h4>
            <p className="text-gray-400 mt-2">Artists get paid per stream.</p>
          </div>

          <div className=" rounded-lg text-center shadow-lg widget">
            <h4 className="font-bold text-lg ">🌍 Community Driven</h4>
            <p className="text-gray-400 mt-2">Playlists & live engagement.</p>
          </div>

        </div>
        
      </section>


    </div>

    <section id='body'>

<div className="max-w mx-auto p-6">

    <h3 className="text-lg font-semibold text-black mb-4">About Us</h3>

    <div className="flex flex-col md:flex-row gap-6 items-start">
        
        
        <div className=" text-black p-4 rounded-lg flex-1">
            <p className='info'>
            Harmony Hub is a decentralized, blockchain-based platform designed to revolutionize the music industry using Web3 technology on the Sui blockchain. Through three interconnected hubs—Melody Mints, Chord Collective, and Sound Stream—we empower artists, collectors, and listeners by creating a transparent, equitable, and engaging music ecosystem. Our mission is to spread harmony across web3 for fans, deliver tangible value through music NFTs, and foster a sustainable global community of music enthusiasts, avoiding the hype-and-crash cycle of past blockchain music ventures.
            </p>
        </div>

        
        <div className="flex-1">
        <img
            src={hh}
            alt="img"
            className=""
        />
        </div>

    </div>
</div>

<div className="max-w mx-auto p-6">

    <h3 className="text-lg font-semibold text-black mb-4">Melody Mints</h3>

    <div className="flex flex-col md:flex-row gap-6 items-start">
    
    
    <div className="flex-1">
        <img
            src={mm2}
            alt="img"
            className="h-60 w-150"
        />
    </div>

    <div className=" text-black p-4 rounded-lg flex-1">
        <p className='info relative'>

         Melody Mints is our launchpad marketplace for artists to mint and launch music NFTs, providing a seamless way to tokenize their sound, connect with fans directly, and earn from their art without intermediaries. It’s where creativity meets Web3, empowering musicians to build, share, and thrive on their own terms.Whether you're an independent artist debuting your first track or an established musician exploring Web3, Melody Mints offers the tools you need to launch your music into the decentralized world. From seamless NFT minting and customizable drops to community-building features, we’re redefining how music is owned, shared, and experienced.

          Join us in shaping the future of music—where artistry and blockchain technology come together in Harmony.

          <span className=' coming_soon absolute bottom-0 right-0'>Coming Soon</span>

        </p>
    </div>

</div>

</div>


</section>

<Gallery/>

<Footer/>
    </>

  );
}

export default Home;