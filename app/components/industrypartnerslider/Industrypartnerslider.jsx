'use client'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider'

import bai from '../../../public/assests/orgnization/5.webp';
import fhandra from '../../../public/assests/orgnization/fhandra.webp';
import HRAWI from '../../../public/assests/orgnization/8.webp';
import IIA from '../../../public/assests/orgnization/IIA.webp';
import AESA from '../../../public/assests/orgnization/9.webp';
import fumma from '../../../public/assests/orgnization/fumma.png';
import AFA from '../../../public/assests/orgnization/6.webp';
import MHEA from '../../../public/assests/orgnization/13.webp';
import HPMF from '../../../public/assests/orgnization/HPMF.webp';
import IICCI from '../../../public/assests/orgnization/12.webp';
import CIE from '../../../public/assests/orgnization/11.webp';


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
            <div className='mx-auto   w-full max-w-screen-2xl '>
                <div className='px-14'>
                <Slider
                        duration={20}
                        pauseOnHover={true}
                        blurBorders={false}
                    >
                        <Slider.Slide>
                            <a href="https://www.baionline.in/"><Image src={bai} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.fhrai.com/index.aspx"><Image src={fhandra} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.hrawi.com/index.aspx"><Image src={HRAWI} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.iiamumbai.com/"><Image src={IIA} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://aesapune.org/"><Image src={AESA} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.fumma.in/"><Image src={fumma} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="#"><Image src={AFA} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="#"><Image src={MHEA} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://hpmf.in/"><Image src={HPMF} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.indianimporterschambers.com/"><Image src={IICCI} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                    
                        <Slider.Slide>
                            <a href="https://cieonline.org/"><Image src={CIE} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                      
                  
                      
                  
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Industrypartnerslider