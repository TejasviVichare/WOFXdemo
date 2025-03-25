import React from 'react'

const Countersection = () => {
  return (
    <div style={{backgroundColor:'#068D8E'}} className='py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 text-white text-xl md:gap-0 gap-10'>
            <div className='text-center'>
              <span className='text-3xl'>100+</span>  <br />
              <span>Exhibiting</span>  <br /> 
               <span >Brands from</span> <br />
              <span>11 Countries</span>  
            </div>
            <div className='text-center'>
              <span> Buyers from</span>  <br />
              <span className='text-3xl'> 26</span>  <br /> 
               <span>States of </span> <br />
              <span>India/UT</span>  
            </div>
            <div className='text-center'>
              <spa> International</spa>  <br />
              <span>  Buyers from</span>  <br /> 
               <span className='text-3xl'>21 </span> <br />
              <span>Countries</span>  
            </div>
            <div className='text-center'>
              <span className='text-3xl'> 13,247</span>  <br />
           
               <span> B2B </span> <br />
              <span>Buyers </span>  
            </div>
        </div>
    </div>
  )
}

export default Countersection