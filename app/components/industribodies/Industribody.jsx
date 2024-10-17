
import a from '../../../public/assests/orgnization/1.webp'
import b from '../../../public/assests/orgnization/2.webp'
import c from '../../../public/assests/orgnization/4.webp'
import d from '../../../public/assests/orgnization/14.webp'
import afmt from '../../../public/assests/orgnization/AFMT.png'

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
                        <h3 className='relative left-0 md:-left-10'>Industry Association Partner</h3>
                    </center>
                    <a href="https://rai.net.in/" className={style.card}>
                        <Image width="200" className='industry_body_img2 relative left-0 md:-left-10' src={b} alt="Card Background" />
                        
                    </a>
                </div>
                {/* <div className=' relative'>
                    <center>
                        <h3 className='absolute w-56 left-2 md:left-32'>Knowledge Partners</h3>
                        <h3>&nbsp;</h3>
                    </center>
                    <a href="https://www.coa.gov.in/" className={style.card}>
                        <Image src={c} alt="Card Background" />
                       
                    </a>
                </div>
                <div className=''>
                    <center>
                        <h3 style={{visibility:"hidden"}}>Industry Partner</h3>
                    </center>
                    <a   href="https://www.iiid.in/" className={style.card}>
                        <Image src={d} alt="Card Background" />
                      
                    </a>
                </div> */}
            </div>
     
        </>
    )
}

export default Industribody