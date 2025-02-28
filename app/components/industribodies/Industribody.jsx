

import b from '../../../public/assests/orgnization/2.webp'
import wgsn from '../../../public/assests/orgnization/WGSN.png'


import afmt from '../../../public/assests/orgnization/AFMT.png'
import FFSC from '../../../public/assests/orgnization/FFSC.png'
import houseOfBrand from '../../../public/assests/countyLogo/2.png'




import Image from 'next/image'
import style from './industribody.module.css'



function Industribody() {
    return (
        <>
            <div className='flex justify-center  flex-wrap '>
                <div className=''>
                    <center>
                        <h3>Alliance Partner</h3>
                    </center>
                    <a href="https://www.afmt.in/" className={style.card}>
                        <Image width="320" className='industry_body_img1 ' src={afmt} alt="Card Background" />
                       
                    </a>
                </div>
                <div className=''>
                    <center>
                        <h3 className='relative'>Industry Association Partner</h3>
                    </center>
                    <a href="https://rai.net.in/" className={style.card}>
                        <Image width="180" className='industry_body_img2' src={b} alt="Card Background" />
                        
                    </a>
                </div>
                  <div className=''>
                    <center>
                        <h3 className='relative'>Skilling Partner</h3>
                    </center>
                    <a href="https://ffsc.in/" className={style.card}>
                        <Image width="160" className='industry_body_img2' src={FFSC} alt="Card Background" />
                        
                    </a>
                </div>

                <div className=''>
                    <center>
                        <h3 className='relative'>House of Brands Partner</h3>
                    </center>
                    <a href="https://creaticityonline.com/" className={style.card}>
                        <Image width="120" className='industry_body_img2' src={houseOfBrand} alt="Card Background" />
                        
                    </a>
                </div>

                <div className=''>
                    <center>
                        <h3 className='relative'>Trends Partner</h3>
                    </center>
                    <a href="https://www.wgsn.com/en" className={style.card}>
                        <Image width="120" className='industry_body_img2' src={wgsn} alt="Card Background" />
                        
                    </a>
                </div>
                
            </div>
     
        </>
    )
}

export default Industribody