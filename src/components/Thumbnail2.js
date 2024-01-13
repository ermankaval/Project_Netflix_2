import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Heart, PlayCircle } from "lucide-react";

const Thumbnail2 = ({ movie }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleAddToWishlist = () => {
    // Wishlist için bir state kullanarak filmi ekleyip çıkarmak
    setIsWishlist(!isWishlist);
  };

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110`}
    >
      <div className="right-3 top-3 absolute z-10">
        <button variant="outline" size="icon" onClick={handleAddToWishlist}>
          <Heart className={`w-5 h-5 ${isWishlist ? 'text-red-500' : 'text-white'}`} />
        </button>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
          className="rounded-sm object-cover md:rounded w-full h-full"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="movie poster"
        />

        <p className="text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center opacity-0 hover:opacity-100 transition-opacity">
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail2;
