'use client'
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Videocomponent = ( {videosrc}) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }
    

    return (
        <div className="bgvideo mx-auto  w-full max-w-screen-2xl">
            <ReactPlayer 
                url={videosrc}
                playing={true}
                muted={true}
                controls={false}
                loop={true}
                light={false}
                config={{
                    file: {
                        attributes: {
                            controlsList: 'nodownload',
                        },
                    },
                }}
          
            />
            <source src={videosrc} type="video/mp4" />
        </div>
    );
};

export default Videocomponent;
