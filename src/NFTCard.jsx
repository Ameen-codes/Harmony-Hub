const NFTCard = ({ image, name, price }) => {
    return (
      <div className=" relative bg-gray-800 p-4 rounded-lg shadow-lg text-white w-60">

        <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />

        <h3 className="text-lg font-bold mt-2">{name} HH OGs</h3>

        <p className="text-blue-400 font-semibold">{price} sui</p>

        <button className="absolute bottom-2 right-3 mt-2 bg-blue-500 text-white px-1 py-0 rounded-md hover:opacity-80 transition">
          Mint
        </button>

      </div>
    );
  };
  
  export default NFTCard;
  