'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from '../../../public/assests/orgnization/3.webp'
import b from '../../../public/assests/orgnization/5.webp'
import c from '../../../public/assests/orgnization/6.webp'
import d from '../../../public/assests/orgnization/7.webp'
import e from '../../../public/assests/orgnization/fhandra.webp'
import f from '../../../public/assests/orgnization/8.webp'
import g from '../../../public/assests/orgnization/9.webp'
import Image from 'next/image';

const logos = [a,b,c,d,e,f,g]


function Industrypartnerslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, // Add this property for auto sliding
        autoplaySpeed: 3000,
    };
  return (
       <>
       <div className='px-10'>
        <center>
        <Slider {...settings}>
            {logos.map((item, index) =>(
                <div className='w-60' key={index}>
                    <Image src={item} width={190} priority={true} height='auto' alt={index} />
                </div>
            ))}
            </Slider>
        </center>
       </div>
       </>
  )
}

export default Industrypartnerslider