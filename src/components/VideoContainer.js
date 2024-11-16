import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos , setVideos] = useState([]);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    setVideos(response.items);
  }

  useEffect(()=>{
    getvideos();
  },[])

  return (
    <div className='relative justify-center cursor-pointer mb-5 flex flex-wrap gap-5 h-[100vh] w-[80vw] -z-50 top-10 left-60'>
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {
        videos.map(video =>
        <Link key={video.id} to={"/watch?v="+ video.id}>
          <VideoCard info={video}/>
        </Link>
        )
      }
    </div>
  );
}

export default VideoContainer;