import { Suspense } from 'react'
import Videocomponent from './Videocomponent'



function Suspencevideo() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl '>
    <section style={{height:"90vh"}} >
      <div  className='absolute top-0 mx-auto flex w-full max-w-screen-2xl'>
        <Suspense fallback={<p>Loading......</p>}>
        <Videocomponent videosrc='https://ik.imagekit.io/m8ncplvbq/WhatsApp%20Video%202024-04-13%20at%2012.09.07%20(1)%20(1).mp4?updatedAt=1712997534075;' /> 
        </Suspense>
      </div>
    </section>
    </div>
  )

}

export default Suspencevideo