// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileLines } from '@fortawesome/free-solid-svg-icons';
// import Image from '@/app/opengraph-image';
import Link from "next/link"



function DropBox() {
    return (
      <div className='dropbox'>
       <Link href="/newsletter">
       <div className='flex justify-center gap-4 items-center'>
           <img src='assests/F+D.png'/>
          <div className='leading-tight text-center'>Download  F+D Newsletter</div>
    
        </div>
       </Link>
  
      </div>
    )
  }
  
  export default DropBox