import { Suspense } from 'react'
import Videocomponent from './Videocomponent'
import VideoSkeleton from './VideoSkeleton'


function Suspencevideo() {
  return (
    <section style={{height:"90vh"}} >
      <div  className='absolute top-0 mx-auto flex w-full max-w-screen-2xl'>
        <Suspense fallback={<p>Loading......</p>}>
        <Videocomponent /> 
        </Suspense>
        <VideoSkeleton />
      </div>
    </section>
  )

}

export default Suspencevideo