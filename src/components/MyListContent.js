import React from 'react';
import { useWishlist } from './WishlistContext';
import Navbar from './Navbar';

const MyListContent = () => {
  const { wishlist } = useWishlist();

  return (
    <div>
      <Navbar />
      <section className="container pb-32" style={{ marginTop: '100px' }}>
        <h1>My List</h1>
        <ul>
          {wishlist.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MyListContent;
