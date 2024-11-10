import React from "react";
import { useDispatch } from "react-redux";
import { toggleNav } from "../utils/sidenavSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleSidenav = () => {
    dispatch(toggleNav());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          onClick={handleToggleSidenav}
        />
        <img
          className="h-8 mx-2"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-6">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 py-2 px-5 rounded-r-full bg-gray-100">
          🔎
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
