import React from 'react';
import { WishlistProvider } from '../../src/components/WishlistContext'
import MyListContent from '../components/MyListContent';
import Navbar from '@/components/Navbar';

const MyListPage = () => {
  return (
    <WishlistProvider>
      <MyListContent />
    </WishlistProvider>


  );
}

export default MyListPage;