
import Link from "next/link"



function DropBox() {
    return (
      <div className='dropbox'>
       <Link href="/show-highlight">
       <div className='flex justify-center gap-2 items-center'>
       <img  style={{width:"50px", height:"50px"}} src='assests/showHighlightImage.png'/>
          <div className='leading-relaxed text-center'> Show Highlight <br /> Click Here </div>
    
        </div>
       </Link>
  
      </div>
    )
  }
  
  export default DropBox