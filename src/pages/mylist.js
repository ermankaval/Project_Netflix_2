import React from 'react';
import { useWishlist } from '../components/WishlistContext';
import Navbar from '@/components/Navbar';
import Thumbnail from '../components/Thumbnail';

const MyList = () => {
  const { selectedMovies } = useWishlist();

  return (
    <div className="mt-16">
      <Navbar />
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <h1 className="text-2xl font-bold mb-4">My List</h1> {/* Yeni eklenen satır */}
        {selectedMovies.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
