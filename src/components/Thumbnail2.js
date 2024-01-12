import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart, PlayCircle } from "lucide-react";


const Thumbnail2 = ({ movie }) => {
  return (

    <Link
      href={`/${movie.id}`}
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110`}
    >
      <div className="relative h-full w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
            }`}
          className="rounded-sm object-cover md:rounded w-full h-full"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="movie poster"
        />
        <p className="text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center opacity-0 hover:opacity-100 transition-opacity">
          {movie.title}
        </p>

        <div className="right-5 top-5 absolute z-10">
          <button variant="outline" size="icon">
            <Heart className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail2;
