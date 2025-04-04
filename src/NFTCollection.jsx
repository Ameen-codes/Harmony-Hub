import NFTCard from "./NFTCard";
import testdata from "./testdata.json";

const NFTCollection = () => {
  return (
    <div className="flex flex-wrap gap-3 py-5">

      {testdata.map((item) => (
        <NFTCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default NFTCollection;
