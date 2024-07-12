'use client'
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bai from '../../../public/assests/orgnization/5.webp';
import HRAWI from '../../../public/assests/orgnization/8.webp';
import IICCI from '../../../public/assests/orgnization/12.webp';
import AESA from '../../../public/assests/orgnization/9.webp';
import CIE from '../../../public/assests/orgnization/11.webp';
import MHEA from '../../../public/assests/orgnization/13.webp';
import AFA from '../../../public/assests/orgnization/6.webp';
import hawa from '../../../public/assests/orgnization/hawa.png';
import hawaexpo from '../../../public/assests/orgnization/hawaexpo.png';
import HIMKILogo from '../../../public/assests/orgnization/HIMKILogo.png';
import ifx from '../../../public/assests/orgnization/IFEXLogo.png';
import thti from '../../../public/assests/orgnization/thti.webp';
import designobject from '../../../public/assests/orgnization/designobjects.png';

const logoses = [{
  logo: bai,
  link: "https://www.baionline.in/"
},
{
  logo: HRAWI,
  link: "https://www.hrawi.com/index.aspx"
},
{
  logo: IICCI,
  link: "https://www.indianimporterschambers.com/"
},
{
  logo: AESA,
  link: "https://aesapune.org/"
},
{
  logo: CIE,
  link: "https://cieonline.org/"
},
{
  logo: MHEA,
  link: "#"
},
{
  logo: AFA,
  link: "https://www.afa1983.com/"
}];

const InternationPavilion = () => {
  const settings = {
    infinite: true,
    speed: 1000, 
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="md:px-24 px-1 overflow-hidden ">
      <div>
        <Slider {...settings}>
        {logoses.map((item, index) => (
          <div key={index} className="px-2">
            <a target="_blank" href={item.link} rel="noopener noreferrer">
              <Image src={item.logo} width={220} height={220} priority={true} alt={`logo-${index}`} />
            </a>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default InternationPavilion;
