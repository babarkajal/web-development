import React from "react";
import VideoItem from "./VideoItem";

//get the video list from App component and send to the VideoItem
const VideoList = ({ videos, onVideoSelect }) => {
  //send each item to the VideoItem
  const renderedList = videos.map((video) => {
    //send the prop to the videoItem which is received from the parent App component
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  //return the list
  return <div> {renderedList}</div>;
};
export default VideoList;
