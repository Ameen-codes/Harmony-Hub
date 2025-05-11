import Carousel from './Carousel';
import NFTCollection from './NFTCollection';
import Navbar from './Navbar';


const MelodyMints = () => {
  return (
    <>


    <div className="relative flex min-h-screen bg-gray-900 text-white p-4 mt-[100px]">
      <Navbar /> 


      <div className="flex-1 w-full overflow-y-auto ">

        <Carousel/>

        <NFTCollection/>
        
      </div>

  
    </div>

    </>
  );
};

export default MelodyMints;
