'use client'


import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'




function CountrySlider() {

    const numbers = Array.from(Array(178).keys())


    return (
        <>
            <div className='mx-auto   w-full max-w-screen-2xl '>
                <div className='px-14'>
                    <Slider
                        duration={30}
                        pauseOnHover={true}
                        blurBorders={false}
                    >

                        {
                            numbers.map((item) => (
                                <>
                                <Slider.Slide>
                                    <Image src={`/assests/countyLogo/${item}.png`} width={160} height={120} alt='a' />
                                </Slider.Slide>
                                </>
                            ))
                        }








                       



                    </Slider>
                </div>
            </div>
        </>
    )
}
export default CountrySlider