import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Logo from './Logo';
import { BiSearch } from "react-icons/bi";
import { useWishlist } from './WishlistContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { likedMoviesCount } = useWishlist();
  

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={scrolled ? 'bg-black' : ''}>
            <div className='container flex justify-between'>
                <div className='flex items-center space-x-2 md:space-x-10'>
                    <Link href="/">
                        <Logo style="h-auto w-[100px]" />
                    </Link>
                    <ul className='hidden space-x-4 md:flex'>
                        <li className='headerLink'>TV Shows</li>
                        <li className='headerLink'>Movies</li>
                        <li className='headerLink'>
                            <Link href="/trendingNow">
                                <div>Trending Now</div>
                            </Link>
                        </li>

                        <li className='headerLink'>
                            <Link href="/MyList">
                                <div>My List ({likedMoviesCount})</div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-4 text-sm font-light">
                    <form onSubmit={handleSearchSubmit}>
                        <BiSearch
                            className={`sm:hidden h-6 w-6 sm:inline cursor-pointer`}
                        />
                        <input
                            type="text"
                            placeholder="Search for movies..."
                            className={`border rounded-md p-2 outline-none ${scrolled ? 'text-white' : ''}`}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </form>
                 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
