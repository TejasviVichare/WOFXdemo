
import Link from "next/link"



function DropBox() {
    return (
      <div className='dropbox'>
       <Link href="/assests/pdf/Highlights-WOFX-2024.pdf">
       <div className='flex justify-center gap-1 items-center'>
       <img  style={{width:"38px", height:"38px"}} src='assests/showHighlightImage.png'/>
          <div className='leading-relaxed text-center text-sm'> Show Highlights <br /> Click Here </div>
        </div>
       </Link>
  
      </div>
    )
  }
  
  export default DropBox