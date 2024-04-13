'use client'

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Videocomponent = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }

    let videosrc = "https://drive.google.com/file/d/1Lg88ru2zgObn4RuSd6dDztTKyaSUIUvc/view";

    return (
        <div className="bgvideo mx-auto  w-full max-w-screen-2xl">
            <ReactPlayer 
                url={videosrc}
                playing={true}
                muted={true}
                controls={true}
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
