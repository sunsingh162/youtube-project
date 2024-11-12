import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const [showVideos, setShowVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setShowVideos(json.items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-wrap justify-center">
      {showVideos[0] && <AdVideoCard info={showVideos[0]} />}
      {showVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
