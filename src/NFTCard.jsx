const NFTCard = ({ id, image, name, price }) => {
    return (

      <div className=" NFTCard relative bg-gray-800 rounded-lg shadow-lg text-white w-47" key={id}>

        <img src={image} alt={name} className="md:w-full md:h-40 object-cover rounded-md" />

         <div className="NFT_i p-2 ff rounded-lg">

           <h3 className="text-lg font-bold mt-2">{name} </h3>

            <p className="text-blue-400 font-semibold">{price} sui</p>

            <button className="absolute bottom-2 right-3 mt-2 bg-blue-500 text-white px-1 py-1 rounded-md hover:opacity-80 transition cursor-pointer">
              Mint
            </button>

          </div>

      </div>
    );
  };
  
  export default NFTCard;
  