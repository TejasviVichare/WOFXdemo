"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Videocomponent = ({ videosrc }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="bgvideo mx-auto  w-full max-w-screen-2xl">
      <video muted autoPlay playsInline loop>
        <source src="assests/WOFX_4_nifcf6.mp4" type="video/mp4" />
      </video>
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default Videocomponent;
