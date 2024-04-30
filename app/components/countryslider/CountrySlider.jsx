'use client'
import a from '../../../public/assests/countyLogo/1.png'
import b from '../../../public/assests/countyLogo/2.png'
import c from '../../../public/assests/countyLogo/3.png'
import d from '../../../public/assests/countyLogo/4.png'

import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'




function CountrySlider() {
    return (
        <>
        <div className='mx-auto   w-full max-w-screen-2xl '>
          <div className='px-14'>
          <Slider
                duration={10}
                pauseOnHover={true}
                blurBorders={false}
            >
                <Slider.Slide>
                    <Image src='/assests/countyLogo/1.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/2.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/3.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/4.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/5.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                  <Slider.Slide>
                    <Image src='/assests/countyLogo/6.png' width={160} height={120} alt='a' />
                </Slider.Slide>


                <Slider.Slide>
                    <Image src='/assests/countyLogo/7.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                
                <Slider.Slide>
                    <Image src='/assests/countyLogo/8.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                
                <Slider.Slide>
                    <Image src='/assests/countyLogo/9.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                
                <Slider.Slide>
                    <Image src='/assests/countyLogo/10.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/11.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/12.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/13.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/14.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/15.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/16.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/17.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/18.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/19.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/20.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src='/assests/countyLogo/20.png' width={160} height={120} alt='a' />
                </Slider.Slide>
                

            
            </Slider>
          </div>
          </div>
        </>
    )
}
export default CountrySlider