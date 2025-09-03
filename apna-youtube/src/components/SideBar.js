import React from "react";

const SideBar = () => {
  return (
    <div className="p-8 shadow-lg col-span-1">
      <div className="m-5">
        <h1 className="font-bold pt-5">Home</h1>
        <h1 className="font-bold pt-5">Shorts</h1>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <hr />
      </div>
      <div className="m-5">
        <ul className="p-1">
          <li>History</li>
          <li>Playlist </li>
          <li>Watch Later</li>
          <li>Liked Vedios</li>
          <li>Your Vedios</li>
        </ul>
        <hr />
      </div>
      <div className="m-5">
        <h1 className="font-bold pt-5">Explore</h1>
        <ul className="p-1">
          <li>Shopping</li>
          <li>Music</li>
          <li>gaming</li>
          <li>Live</li>
          <li>News</li>
          <li>Sports</li>
          <li>Trending</li>
          <li>Fahion/beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
