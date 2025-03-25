
import React from 'react'
import Videocomponent from '../components/video/Videocomponent'
import Margue from '../components/marque/Margue'
import Industribody from '../components/industribodies/Industribody'
import Industrypartnerslider from '../components/industrypartnerslider/Industrypartnerslider'
import WhatPeopleSaying from '../newcomponents/WhatPeopleSaying'
import SliderHighlights from './component/SliderHighlights'
import Whywofxnew from './component/Whywofxnew'
import BuyerLounges from './component/BuyerLounges'
import Countersection from './component/Countersection'


function page() {
  return (
    <div>
      
      <Videocomponent />
      <div className='mt-20'>
        <Countersection />
      </div>
      <div>
        <SliderHighlights />
      </div>
      <Whywofxnew />
      <div>
        <WhatPeopleSaying />
      </div>
      <div>
        <BuyerLounges />
      </div>
      <div className='mt-28'>
        <p className='text-3xl italic font-bold text-center mb-6' style={{color:'#592556'}}>Brands Connect @ WOFX</p>
         <Margue />
      </div>
      <div className='mt-16'>
        <p className='text-3xl italic font-bold text-center mb-6' style={{color:'#592556'}}> Industry Bodies Endorsing WOFX</p>
        <Industribody />
      </div>
      <div className='mt-10'>
        <p className='text-3xl italic font-bold text-center mb-6' style={{color:'#592556'}}>Supporting Organsiations</p>
        <Industrypartnerslider />
      </div>
    </div>
  )
}

export default page