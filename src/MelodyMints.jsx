import Carousel from './Carousel';
import NFTCollection from './NFTCollection';


const MelodyMints = () => {
  return (
    <div className="relative flex min-h-screen bg-gray-900 text-white p-4 gap-4 mt-[100px]">

      <aside className="w-1/6 bg-gray-800 p-6 rounded-lg h-[80vh] flex flex-col fixed left-4 ">

        <h2 className="text-lg font-bold">Dashboard</h2>

        <ul className="mt-4 space-y-2 flex flex-col gap-3">
          
          <li className="hover:text-blue-400 cursor-pointer">My Collection</li>
          <li className="hover:text-blue-400 cursor-pointer">Artists</li>
          <li className="hover:text-blue-400 cursor-pointer">My Collection</li>
          <li className="hover:text-blue-400 cursor-pointer">Explore</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>

        </ul>

      </aside>


      <div className="flex-1 ml-[20%] mr-[20%] overflow-y-auto ">

        <Carousel/>

        <NFTCollection/>
        
      </div>

      {/* Right Sidebar */}
      <aside className="w-1/6 bg-gray-800 p-4 rounded-lg h-[80vh] flex flex-col fixed right-4">

        <h2 className="text-lg font-bold">Notifications</h2>
        <p className="mt-4 text-sm">No new alerts</p>

      </aside>

    </div>
  );
};

export default MelodyMints;
