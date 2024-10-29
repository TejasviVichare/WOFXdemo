
import a from '../../../public/assests/orgnization/1.webp'
import b from '../../../public/assests/orgnization/2.webp'
import c from '../../../public/assests/orgnization/4.webp'
import d from '../../../public/assests/orgnization/14.webp'
import afmt from '../../../public/assests/orgnization/AFMT.png'
import FFSC from '../../../public/assests/orgnization/FFSC.png'
import houseOfBrand from '../../../public/assests/countyLogo/2.png'



import Image from 'next/image'
import style from './industribody.module.css'
const industribody = [
    {
        img: a,
        text: 'Association of Furniture Manufacturers & Traders',
        a: 'https://www.afmt.in/',
        heading: 'Industry Partner',
        class: "a"
    },
    {
        img: b,
        text: 'Retailers Association of India (RAI)',
        a: 'https://www.afmt.in/',
        heading: "Industry Association Partner",
        class: "b"
    }, {
        img: c,
        text: 'Council of Architecture India',
        a: 'https://www.afmt.in/',
        heading: 'Knowledge Partners',
        class: "c"
    },
    {
        img: d,
        text: 'Institute of Indian Interior Designers India',
        a: 'https://www.afmt.in/',
        heading: '',
        class: "d"
    }]


function Industribody() {
    return (
        <>
            <div className='flex justify-center  flex-wrap '>
                <div className=''>
                    <center>
                        <h3>Industry Partner</h3>
                    </center>
                    <a href="https://www.afmt.in/" className={style.card}>
                        <Image width="250" className='industry_body_img1 ' src={afmt} alt="Card Background" />
                       
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
                        <h3 className='relative'>House of Brand Partner</h3>
                    </center>
                    <a href="https://ffsc.in/" className={style.card}>
                        <Image width="120" className='industry_body_img2' src={houseOfBrand} alt="Card Background" />
                        
                    </a>
                </div>
                
            </div>
     
        </>
    )
}

export default Industribody