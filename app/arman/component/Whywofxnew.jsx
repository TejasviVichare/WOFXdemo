import React from 'react'
import whywofx from '../../../public/assests/why-wofx.png'
import Image from 'next/image'
import styles from './style.module.css';

const Whywofxnew = () => {
  return (
    <div style={{backgroundColor:'#e6e6e6'}} className='py-16' >
      <div className='grid md:grid-cols-[1fr_2fr]  grid-cols-1 gap-8'>
        <div className='flex justify-center  items-center '  >
            <Image src={whywofx} className='w-56 h-auto ' />
        </div>
        <div className={styles.whywofx}  >
             <p className='mb-6'  style={{fontSize:'14px'}}>
                WOFX-World Furniture Expo is your gateway to opportunities in
                the domestic and global furniture &amp; design market. WOFX
                connects you with the essential tools, resources, and key
                players you need to navigate the industry&apos;s dynamic
                landscape.
              </p>
              <p className='mb-6' style={{fontSize:'14px'}}>
                WOFX capitalizes on India&apos;s projected 10.9% CAGR furniture
                market growth (2023-2028) and the significant increase in
                furniture imports. As a strategic hub for furniture, design, and
                d&eacute;cor, WOFX positions you to tap into India&apos;s
                booming market - now the 4th largest furniture consumer
                globally.
              </p>
              <p className='mb-6' style={{fontSize:'14px'}}>
                WOFX will see companies present the latest trends, designs and
                innovative concepts to a market expected to reach $32.7 billion
                by 2026 from $23.12 billion in 2022 and where overall imports of
                wood, wood products &amp; furniture grew 10.4%, from $2.14
                billion in 2022 to $2.37 billion in 2023.
              </p>
             
             

        </div>
      </div>



    </div>
  )
}

export default Whywofxnew