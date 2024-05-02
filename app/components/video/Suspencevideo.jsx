import { Suspense } from 'react'
import Videocomponent from './Videocomponent'



function Suspencevideo() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl '>
    <section className='videoContainer'>
      <div  className=' mx-auto flex w-full max-w-screen-2xl'>
        <Suspense fallback={<p>Loading......</p>}>
        <Videocomponent videosrc='https://res.cloudinary.com/dkcfsf9dz/video/upload/v1714632172/WOFX_4_nifcf6.mp4' /> 
        </Suspense>
      </div>
    </section>
    </div>
  )

}

export default Suspencevideo