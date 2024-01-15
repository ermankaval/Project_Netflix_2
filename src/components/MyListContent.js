import React from 'react';
import { useWishlist } from './WishlistContext';
import Navbar from './Navbar';

const MyListContent = () => {
  const { wishlist } = useWishlist();

  return (
    
    <div>
      <Navbar/>
      <h1>My List</h1>
      <ul>
        {wishlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyListContent;
