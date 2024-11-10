import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isSidenavOpen = useSelector((store) => store.sidenav.isNavOpen);

  if(!isSidenavOpen) return null;
  return (
    <div className="shadow-lg w-48">
      <div className="border-b-2 ">
        <div className="py-2 mx-10">
          <h1>Home</h1>
          <h1>Shorts</h1>
          <h1>Subscriptions</h1>
        </div>
      </div>
      <div className="border-b-2">
        <div className="py-2 mx-10">
          <h1>You </h1>
          <div>
            <p>History</p>
            <p>Playlists</p>
            <p>Watch Later</p>
            <p>Liked Videos</p>
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div className="py-2 mx-10">
          <h1>Subscriptions</h1>
          <div>
            <p>Akshay Saini</p>
            <p>All Subscriptions</p>
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div className="py-2 mx-10">
          <h1>Explore</h1>
          <div>
            <p>Trending</p>
            <p>Shopping</p>
            <p>Music</p>
            <p>Movies</p>
            <p>Live</p>
            <p>News</p>
            <p>Sports</p>
            <p>Courses</p>
            <p>Fashion & Beauty</p>
            <p>Podcasts</p>
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div className="py-2 mx-10">
          <h1>More from Youtube</h1>
          <div>
            <p>Youtube Premium</p>
            <p>Youtube Music</p>
            <p>Youtube Kids</p>
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div className="py-2 mx-10">
          <p>Settings</p>
          <p>Report History</p>
          <p>Help</p>
          <p>Send Feedback</p>
        </div>
      </div>
      <div>
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default SideBar;
