import NumberAnimation from '@/app/components/show-summery/NumberAnimation'
import React from 'react'

const Countersection = () => {
  return (
    <div style={{backgroundColor:'#068D8E'}} className='py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 text-white text-xl md:gap-0 gap-10'>
            <div className='text-center'>
              <div className='flex items-center justify-center md:text-3xl text-4xl'><div><NumberAnimation n={100} /></div> <div>+</div></div> 
              <span>Exhibiting</span>  <br /> 
               <span >Brands from</span> <br />
              <span>11 Countries</span>  
            </div>
            <div className='text-center'>
              <span> Buyers from</span>  <br />
              <div className='flex items-center justify-center text-3xl'><div><NumberAnimation n={26} /></div> <div>+</div></div> 
               <span>States of </span> <br />
              <span>India/UT</span>  
            </div>
            <div className='text-center'>
              <spa> International</spa>  <br />
              <span>  Buyers from</span>  <br /> 
              <div className='flex items-center justify-center text-3xl'><div><NumberAnimation n={21} /></div> <div>+</div></div> 
              <span>Countries</span>  
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center text-3xl'><div><NumberAnimation n={13247} /></div> <div>+</div></div> 
               <span> B2B </span> <br />
              <span>Buyers </span>  
            </div>
        </div>
    </div>
  )
}

export default Countersection