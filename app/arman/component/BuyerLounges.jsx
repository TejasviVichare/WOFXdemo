import React from 'react'
import Image from 'next/image'
import dealerdist from '../../../public/assests/demoimg/2.png'
import projectprof from '../../../public/assests/demoimg/1.png'
import furniturefranch from '../../../public/assests/demoimg/5.png'
import investorLink from '../../../public/assests/demoimg/4.png'
import retailConnect from '../../../public/assests/demoimg/3.png'
import styles from './style.module.css';

import icon from '../../../public/assests/Icon.png'

const BuyerLounges = () => {
  return (
    <div style={{backgroundColor:'#e6e6e6'}} className='py-16'>
        <p className='text-3xl italic font-bold text-center mb-20' style={{color:'#592556'}}>Fuel your Success at Buyer Lounges</p>
         
         {/* First Row */}
        <div className='flex md:flex-row flex-col justify-center md:gap-20'>
            <div className='flex md:flex-row flex-col'>
                <div className={styles.imgdiv}  >
                    <Image src={dealerdist} className='w-44'/>
                </div>
                <div className={`${styles.content} bg-white px-4  py-6 sm:w-72`} >
                     <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Dealers</div>
                     <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Distributors</div>
                     <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Wholesalers</div>
                     <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Importers</div>
                     <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Trading & Buying Houses</div>
                     <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Agents</div>                              
                </div>
            </div>
            <div className='flex md:flex-row flex-col'>
            <div className={styles.imgdiv}>
                    <Image src={projectprof} className='w-44'/>
                </div>
                <div className={`${styles.content} bg-white pl-2  py-6 sm:w-72`} >
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Project Management Consultant </div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Architects & Interior Designers </div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Real Estate Developers </div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> HORECA</div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Corporate Sourcing Heads</div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Institutional</div>
                </div>
            </div>
        </div>

         {/* Second Row */}
        <div className='flex md:flex-row flex-col justify-center md:gap-20'>
        <div className='flex md:flex-row flex-col'>
                <div className={styles.imgdiv}>
                    <Image src={retailConnect} className='w-44'/>
                </div>
                <div className={`${styles.content} bg-white px-4  py-6 sm:w-72`} >
                    <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Retailers</div>
                    <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> E-Tailers</div>
                    <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Large Format Retailers</div>
                    <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Online Traders</div>
                
                </div>
            </div>
            
        </div>
        {/* Third Row */}
        <div className='flex md:flex-row flex-col justify-center md:gap-20'>
            <div className='flex md:flex-row flex-col'>
                <div className={styles.imgdiv}>
                    <Image src={furniturefranch} className='w-44'/>
                </div>
            <div className={`${styles.content} bg-white px-4  py-6 sm:w-72`} >
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Franchisees</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Entrepreneurs</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Agents</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Consultants</div>
        
                </div>
            </div>
            <div className='flex md:flex-row flex-col'>
            <div className={styles.imgdiv}>
                    <Image src={investorLink} className='w-44'/>
                </div>
                <div className={`${styles.content} bg-white px-4  py-6 sm:w-72`} >
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Private Equity </div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Family Offices </div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Venture Capital </div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Investment Consultants</div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> International Companies</div>
                              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Corporates</div>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyerLounges