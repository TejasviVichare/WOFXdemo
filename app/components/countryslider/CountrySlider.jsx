'use client'
import a from '../../../public/assests/countyLogo/1.png'
import b from '../../../public/assests/countyLogo/2.png'
import c from '../../../public/assests/countyLogo/3.png'
import d from '../../../public/assests/countyLogo/4.png'
import e from '../../../public/assests/countyLogo/5.png'
import f from '../../../public/assests/countyLogo/6.png'
import g from '../../../public/assests/countyLogo/7.png'
import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'




function CountrySlider() {
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
                    <Image src={a} width={140} height={100} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={b} width={140} height={100} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={c} width={140} height={100} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={d} width={140} height={100} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={e} width={140} height={100} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={f} width={140} height={100} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={g} width={140} height={100} alt='a' />
                </Slider.Slide>
            </Slider>
          </div>
          </div>
        </>
    )
}
export default CountrySlider