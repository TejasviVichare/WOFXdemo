
import a from '../../../public/assests/orgnization/1.webp'
import b from '../../../public/assests/orgnization/2.webp'
import c from '../../../public/assests/orgnization/4.webp'
import d from '../../../public/assests/orgnization/9.webp'
import Image from 'next/image'
import style from './industribody.module.css'
const industribody = [
    {
        img: a,
        text: 'Association of Furniture Manufacturers & Traders',
        a: 'https://www.afmt.in/',
        heading: 'Industry Partner'
    },
    {
        img: b,
        text: 'Retailers Association of India (RAI)',
        a: 'https://www.afmt.in/',
        heading: "Industry Association Partner"
    }, {
        img: c,
        text: 'texprocilCouncil of Architecture India',
        a: 'https://www.afmt.in/',
        heading: 'Knowledge Partner'
    },
    {
        img: d,
        text: 'Institute of Indian Interior Designers India',
        a: 'https://www.afmt.in/',
        heading: ''
    }]


function Industribody() {
    return (
        <>
            <div className='flex justify-center  flex-wrap gap-10'>
                {
                    industribody?.map((item, index) => (
                        <div  key={index}>
                            <center>
                                <h3>{item.heading}</h3>
                            </center>
                            <a   href="#" className={style.card}>
                                <Image src={item.img}  alt="Card Background" />
                                    <div className={style.overlay}>
                                        <p>{item.text}</p>
                                    </div>
                            </a>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Industribody