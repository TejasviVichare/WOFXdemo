'use client'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import a from '../../../public/assests/orgnization/3.webp'
import b from '../../../public/assests/orgnization/5.webp'
import c from '../../../public/assests/orgnization/6.webp'
import d from '../../../public/assests/orgnization/7.webp'
import fhandra from '../../../public/assests/orgnization/fhandra.webp'
import f from '../../../public/assests/orgnization/8.webp'
import g from '../../../public/assests/orgnization/9.webp'
import h from '../../../public/assests/orgnization/10.webp'
import i from '../../../public/assests/orgnization/11.webp'
import j from '../../../public/assests/orgnization/12.webp'
import k from '../../../public/assests/orgnization/13.webp'
import l from '../../../public/assests/orgnization/hawa.png'
import m from '../../../public/assests/orgnization/hawaexpo.png'
import n from '../../../public/assests/orgnization/HIMKI Logo.png'
import o from '../../../public/assests/orgnization/IFEX Logo.png'








import Image from 'next/image';
import Slider from 'react-infinite-logo-slider'



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
                        duration={40}
                        pauseOnHover={true}
                        blurBorders={false}
                    >
                        <Slider.Slide>
                            <a href="https://www.adi.org.in/"><Image src={a} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.baionline.in/"><Image src={b} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.afa1983.com/"><Image src={c} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://ppfi.in/member-register.asp"><Image src={d} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>

                        <Slider.Slide>
                            <a href="https://www.fhrai.com/"><Image src={fhandra} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.hrawi.com/"><Image src={f} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://aesapune.org/"><Image src={g} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.facebook.com/fummakeralaassociation/"><Image src={h} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="http://cieonline.org/"><Image src={i} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="#"><Image src={j} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="#"><Image src={k} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://hawa.vn/?lang=en"><Image src={l} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.hawaexpo.com/"><Image src={m} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.himki.id/"><Image src={n} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                        <Slider.Slide>
                            <a href="https://www.ifexindonesia.com/"><Image src={o} width={200} height='auto' alt='a' /></a>
                        </Slider.Slide>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Industrypartnerslider