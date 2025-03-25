'use client'
import React, { useState, useRef } from 'react';
import playicon from '../../public/assests/demoimg/playicon.png'
import Image from 'next/image';
const videoSrc = [
  'https://res.cloudinary.com/dkcfsf9dz/video/upload/v1714632172/WOFX_4_nifcf6.mp4',
  'https://res.cloudinary.com/dkcfsf9dz/video/upload/v1714632172/WOFX_4_nifcf6.mp4',
  'https://res.cloudinary.com/dkcfsf9dz/video/upload/v1714632172/WOFX_4_nifcf6.mp4'
];

const WhatPeopleSaying = () => {
  const videoRefs = useRef([]);
  const [playing, setPlaying] = useState(Array(videoSrc.length).fill(false));

  const handleTogglePlay = (index) => {
    const video = videoRefs.current[index];

    if (video.paused) {
      video.play();
      updatePlayingState(index, true);
    } else {
      video.pause();
      updatePlayingState(index, false);
    }
  };

  const updatePlayingState = (index, isPlaying) => {
    setPlaying((prevState) => {
      const newState = [...prevState];
      newState[index] = isPlaying;
      return newState;
    });
  };

  return (
    <div style={{ backgroundColor: '#068E8E' }} className="py-7">
      <p className="font-bold text-3xl italic text-center mb-10 text-white">
        What people say about WOFX
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 px-16">
        {videoSrc.map((video, index) => (
          <div key={index} className="relative group">
            {/* Video Element */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              width="100%"
              className="rounded-lg"
              onClick={() => handleTogglePlay(index)}
            >
              <source src={video} type="video/mp4" />
            </video>

            {/* Play/Pause Button Toggle */}
            {!playing[index] && (
              <button
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100 hover:opacity-80 transition-opacity rounded-lg"
                onClick={() => handleTogglePlay(index)}
              >
                <Image  src={playicon} alt="Play" className="w-12 h-12" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatPeopleSaying;
