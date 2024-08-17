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
import fhandra from '../../../public/assests/orgnization/fhandra.webp';
import IIA from '../../../public/assests/orgnization/IIA.webp';
import HPMF from '../../../public/assests/orgnization/HPMF.webp';
import ifx from '../../../public/assests/orgnization/IFEXLogo.png';
import thti from '../../../public/assests/orgnization/thti.webp';
import designobject from '../../../public/assests/orgnization/designobjects.png';

const logoses = [{
  logo: bai,
  link: "https://www.baionline.in/"
}
,
{
  logo: fhandra,
  link: "https://www.fhrai.com/index.aspx"
},

{
  logo: HRAWI,
  link: "https://www.hrawi.com/index.aspx"
},
,
{
  logo: IIA,
  link: "https://www.iiamumbai.com/"
},

{
  logo: AESA,
  link: "https://aesapune.org/"
},
{
  logo: AFA,
  link: "#"
},

{
  logo: MHEA,
  link: "#"
}
,
{
  logo: HPMF,
  link: "https://hpmf.in/"
},

{
  logo: IICCI,
  link: "https://www.indianimporterschambers.com/"
},
{
  logo: CIE,
  link: "https://cieonline.org/"
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
