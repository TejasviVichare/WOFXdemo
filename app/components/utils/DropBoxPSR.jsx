
import Link from "next/link"



function DropBoxPSR() {
    return (
      <div className='dropbox'>
       <Link href="/assests/pdf/Post-Show-Report-WOFX-2024.pdf">
       <div className='flex justify-center  items-center'>
       <img  style={{width:"50px", height:"50px"}} src='assests/showHighlightImage.png'/>
          <div className='leading-relaxed text-center'> Post Show Report <br /> Click Here </div>
        </div>
       </Link>
  
      </div>
    )
  }
  
  export default DropBoxPSR