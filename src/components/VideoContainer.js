import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  return <div>VideoContainer</div>;
};

export default VideoContainer;
