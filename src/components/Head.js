import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../utils/sidenavSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { searchCache } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const cacheStore = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleToggleSidenav = () => {
    dispatch(toggleNav());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheStore[searchQuery]) {
        setSearchSuggestions(cacheStore[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      dispatch(
        searchCache({
          [searchQuery]: json[1],
        })
      );
    } catch (err) {
      console.log(err);
    }
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
        <div>
          <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-500 py-2 px-5 rounded-r-full bg-gray-100">
            🔎
          </button>
        </div>
        {showSuggestion && (
          <div className="bg-white fixed px-3 py-2 m-1 w-[25.7rem] rounded-lg border-gray-200">
            {searchSuggestions &&
              searchSuggestions.map((suggestion) => (
                <ul key={suggestion}>
                  <li className="flex hover:bg-gray-100">
                    <span className="mt-1.5">
                      <CiSearch />
                    </span>
                    <span className="mx-5">{suggestion}</span>
                  </li>
                </ul>
              ))}
          </div>
        )}
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
