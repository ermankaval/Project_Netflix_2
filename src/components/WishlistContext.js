// WishlistContext.js
import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const addToWishlist = (movie) => {
    setSelectedMovies((prevSelectedMovies) => [...prevSelectedMovies, movie]);
  };

  const removeFromWishlist = (movieId) => {
    setSelectedMovies((prevSelectedMovies) =>
      prevSelectedMovies.filter((movie) => movie.id !== movieId)
    );
  };

  const contextValue = {
    selectedMovies,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
