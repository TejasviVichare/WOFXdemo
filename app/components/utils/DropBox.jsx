import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';


function DropBox() {
    return (
      <div className='dropbox'>
       <a href="/assests/pdf/Newsletter.pdf">
       <div className='flex justify-center gap-4 items-center'>
          <div className='text-lg text-white leading-tight text-center'>Download <br /> F+D Newsletter</div>
          <FontAwesomeIcon className=' h-14 text-white' icon={faFileLines} />
        </div>
       </a>
  
      </div>
    )
  }
  
  export default DropBox