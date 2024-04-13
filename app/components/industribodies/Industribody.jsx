
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
        heading:'Industry Partner'
    },
    {
        img: b,
        text: 'Retailers Association of India (RAI)',
        a: 'https://www.afmt.in/',
        heading:"Industry Association Partner"
    }, {
        img: c,
        text: 'texprocilCouncil of Architecture India',
        a: 'https://www.afmt.in/',
        heading:'Knowledge Partner'
    },
    {
        img: d,
        text: 'Institute of Indian Interior Designers India',
        a: 'https://www.afmt.in/',
        heading:''
    }]


function Industribody() {
    return (
        <>
            <div className='flex justify-center gap-10'>
                {
                    industribody?.map((item, index) => (
                        <div key={index}>
                             <center>
                             <h3>{item.heading}</h3>
                             </center>
                            <div className={style.flip}>
                                <div className={style.content}>
                                    <div className={style.front +"flex items-center"}>
                                        <Image src={item.img} width='auto'  height='auto' alt='a' />
                                    </div>
                                    <div className={style.back}>
                                        <h2>{item.text}</h2>
                                        <p><a href={item.a}>Visit : Website</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Industribody