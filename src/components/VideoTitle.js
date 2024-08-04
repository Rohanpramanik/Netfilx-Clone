import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video absolute pt-[20%] px-10 text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold m-2">{title}</h1>
      <p className="py-5 w-2/4 m-2">{overview}</p>
      <div className="justify-between">
        <button className="w-40 p-2 m-2 bg-white text-black rounded-md hover:bg-opacity-80">▶️ Play</button>
        <button className="w-40 p-2 m-2 bg-gray-500 text-white bg-opacity-50 rounded-md hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;