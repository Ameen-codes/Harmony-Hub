import img1 from './assets/gallery/img1.jpg';
import img2 from './assets/gallery/img2.jpg';
import img3 from './assets/gallery/img3.jpg';
import img4 from './assets/gallery/img4.jpg';
import img5 from './assets/gallery/img5.jpg';
import gif from './assets/gallery/gif.mp4'

const images = [img1, img2, img3, img4, img5];
const videos = [gif];

const Gallery = () => {
  return (
    <div className="columns-2 md:columns-3 gap-4 p-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="w-full mb-4 rounded-lg shadow-md"
        />
      ))}

       {videos.map((src, index) => (
        <video
          key={index}
          src={src}
          className="w-full mb-4 rounded-lg shadow-md "
          autoPlay
          muted
          loop
          playsInline
        />
      ))}
    </div>
  );
};

export default Gallery;
