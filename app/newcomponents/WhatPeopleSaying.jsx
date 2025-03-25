import React from 'react'

const videoSrc =[
    'https://res.cloudinary.com/dkcfsf9dz/video/upload/v1714632172/WOFX_4_nifcf6.mp4',
    'https://res.cloudinary.com/dkcfsf9dz/video/upload/v1714632172/WOFX_4_nifcf6.mp4',
    'https://res.cloudinary.com/dkcfsf9dz/video/upload/v1714632172/WOFX_4_nifcf6.mp4'
]

const WhatPeopleSaying = () => {

  return (
    <div style={{backgroundColor:'#068E8E'}} className='py-7'>
      <p className='font-bold text-3xl italic text-center mb-10' style={{color:'#fff'}} >What people say about WOFX</p>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6 px-16'>
        {videoSrc.map((video,index )=>(
              <video key={index} width="100%" controls>
                <source src={video} type="video/mp4" />              
              </video>
        )) }
     </div>
    </div>
  )
}

export default WhatPeopleSaying