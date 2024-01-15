import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Heart } from "lucide-react";

const Thumbnail2 = ({ movie }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const handleThumbnailClick = () => {
    // Resme tıklandığında yapılacak işlemler
    console.log("Resme tıklandı");
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation(); // Resme tıklandığında bu olayın parentlara iletilmesini engelle
    setIsWishlist(!isWishlist);

    // Filmi wishlist'e ekle veya çıkar
    setWishlist((prevWishlist) => {
      if (isWishlist) {
        // Eğer film wishlist'te varsa, çıkar
        return prevWishlist.filter((item) => item.id !== movie.id);
      } else {
        // Eğer film wishlist'te yoksa, ekle
        return [...prevWishlist, movie];
      }
    });
  };

  return (
    <div className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110`} onClick={handleThumbnailClick}>
      <div className="right-3 top-3 absolute z-10">
        <button variant="outline" size="icon" onClick={handleAddToWishlist}>
          <Heart className={`w-5 h-5 ${isWishlist ? 'text-red-500' : 'text-white'}`} />
        </button>
      </div>
      <div className="relative h-full w-full">
        <Link href={`/${movie.id}`} passHref>
          <div onClick={handleThumbnailClick}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
              className="rounded-sm object-cover md:rounded w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="movie poster"
            />
          </div>
        </Link>
        <p className="text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center opacity-0 hover:opacity-100 transition-opacity">
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail2;
