import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideNav } from "../utils/sidenavSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(hideNav());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="mx-2 p-2">
        <iframe
          className="rounded-lg"
          width="800"
          height="400"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1&controls=0&showinfo=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
