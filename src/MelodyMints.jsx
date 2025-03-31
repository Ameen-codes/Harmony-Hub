import mm from './assets/mm.jpg';
import xeus from './assets/xeus.jpg'
import { FaImage } from 'react-icons/fa';



const MelodyMints = () => {
  return (
    <div className="relative flex min-h-screen bg-gray-900 text-white p-4 gap-4 mt-[100px]">

      <aside className="w-1/6 bg-gray-800 p-6 rounded-lg h-[80vh] flex flex-col fixed left-4 ">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <ul className="mt-4 space-y-2">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">My Collection</li>
          
          <li className="hover:text-blue-400 cursor-pointer">Explore</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content Wrapper (Scrollable) */}
      <div className="flex-1 ml-[20%] mr-[20%] overflow-y-auto ">
        
        {/* Top Banner */}
        <div 
          className=" relative h-[40vh] bg-cover bg-no-repeat text-white text-center p-6 rounded-md flex items-center justify-center"
          style={{ backgroundImage: `url(${mm})` }}
        >

<i class="fa-solid fa-image"></i>

          <span className='absolute top-2 left-2 rounded-full px-1 bg-red-400 text-sm'> Trending</span>

          <div>
            <h1 className="text-2xl font-bold">Welcome to Melody Mints</h1>
            <p>Your hub for artistic music NFTs</p>
          </div>

        </div>

        {/* 3x3 Grid Section */}
        <div className="grid grid-cols-3 gap-4 mt-6 px-10">

          {[...Array(21)].map((_, i) => (

            <div key={i} className="bg-gray-700 text-center rounded-lg">

              {/* Box {i + 1} */}

              <img src={xeus} alt="" className='w-[100%] h-[auto] contain rounded'/>

              <div className='relative p-2'>

                <h3 className='text-left text-sm text-b '>John Doe</h3>

                <span className='absolute bottom-2 right-2 bg-red-500 text-sm round-full'> Mint</span>
                
              </div>

            </div>

          ))}

        </div>
      </div>

      {/* Right Sidebar (Smaller, Fixed Height) */}
      <aside className="w-1/6 bg-gray-800 p-4 rounded-lg h-[80vh] flex flex-col fixed right-4">
        <h2 className="text-lg font-bold">Notifications</h2>
        <p className="mt-4 text-sm">No new alerts</p>
      </aside>

    </div>
  );
};

export default MelodyMints;
