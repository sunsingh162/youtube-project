import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    info && (
      <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg" alt="video" src={thumbnails.high.url} />
        <h1 className="font-bold py-2">{title}</h1>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
      </div>
    )
  );
};

export const AdVideoCard = ({info}) => {
    return (
      <div>
        <h1 className="absolute border-gray-100 bg-gray-400 p-1 rounded-lg">Ad</h1>
        <VideoCard info={info} />
      </div>
    );
};

export default VideoCard;
