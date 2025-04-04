import { useState, useEffect } from "react";
import mm from "./assets/mm.jpg";
import hh from "./assets/hh.jpg";

const images = [mm, hh, mm, hh, mm];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play with interval
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div 
      className="relative h-[300px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)} 
    >
     
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover rounded-sm transition-transform duration-500"
      />

        <span className='absolute top-2 left-2 rounded-sm px-1 bg-red-500 text-sm'> Trending</span>

      
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full ${
              current === index ? "bg-white" : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
