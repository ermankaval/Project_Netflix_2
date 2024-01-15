import React, { useState } from "react";
import Thumbnail2 from "./Thumbnail2";
import Navbar from "@/components/Navbar";

const MyListPage = ({ wishlist }) => {
    return (
        <>
            <Navbar />
            <div>
                <h1>My List</h1>
                <div className="wishlist">
                    {wishlist.map((movie) => (
                        <Thumbnail2 key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

        </>

    );
};

export default MyListPage;
