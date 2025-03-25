'use client'
import React from 'react'
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
  '/assests/convergefordemo.jpg',
  '/assests/convergefordemo.jpg',
  '/assests/convergefordemo.jpg',
]

const SliderHighlights = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='md:py-20 py-8 flex justify-center' style={{backgroundColor:'#D9B471'}}>
        <Slider {...settings} className="md:w-3/4 w-full mx-auto">
        {images.map((img, index) => (
          <div key={index} className="px-2">
          <Image src={img} className="w-full" width={980} height={980} priority={true} alt={`Slide ${index + 1}`} />      
           </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderHighlights