import Image from 'next/image'
import style from './footer.module.css'
import Link from 'next/link';
import logo from '../../../public/assests/WORLDEX.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>
      <footer>
        <div className='mx-auto   w-full max-w-screen-2xl '>
          <div className={style.maincontainer}>
            <div className={style.nesteddiv}>
              <h3 className='text-xl text-slate-200 font-bold'>ORGANISED BY</h3>
              <Image src={logo} width={185} height='auto' alt="" />
              <p className='text-slate-300' style={{ paddingTop: "13px" }}>309, Parvati Premises, Sun Mill Complex, <br />
                Lower Parel (W), Mumbai - 400 013, India </p>
              <a className='text-slate-300' href="tel:(+91) 022-4037-6700"> <FontAwesomeIcon icon={faPhone} /> (+91) 022-4037-6700</a><br />
              <a className='text-slate-300' href="mailto:contactus@worldexindia.com"> <FontAwesomeIcon icon={faEnvelope} /> contactus@worldexindia.com</a>
            </div>
            
            <div className={style.nesteddiv}>
              <h3 className='text-xl text-slate-200 font-bold'>QUICK LINKS</h3>
              <p className='text-slate-300'>
              <FontAwesomeIcon icon={faRightFromBracket} /> <Link href="https://www.bee2bee.asia/wofx-2025/exhibitor-enquiry" >Exhibitor Enquiry Form</Link><br />
              <FontAwesomeIcon icon={faRightFromBracket} /> <Link href="https://www.bee2bee.asia/wofx-2025/buyer-registration"
                  target="_blank">Buyer Registration Form</Link><br />
               <FontAwesomeIcon icon={faRightFromBracket} /> <Link href="/exhibitor-profile" >Exhibitor Profile</Link><br />
               <FontAwesomeIcon icon={faRightFromBracket} /> <Link href="buyer-profile" >Buyer Profile</Link><br />
               <FontAwesomeIcon icon={faRightFromBracket} /> <Link href="/terms-conditions" >Terms and Conditions</Link>
              </p>
            </div>
            <div className={style.nesteddiv}>
              <h3 className='text-xl text-slate-200 font-bold'>ABOUT WOFX</h3>
              <p className='text-slate-300'>WOFX is a professional B2B trade show dedicated exclusively to the furniture + design
                industry in
                India.
                It is a show where all categories of furniture and décor come together on one industry
                platform.
              </p>
              <div className="social-footer">
                <p><a href="https://www.facebook.com/worldfurnitureexpo" target="_blank" title=""></a>
                </p>
                <p className="twitter"><a href="https://twitter.com/WORLDFURNITURE4" target="_blank" title=""></a></p>
                <p className="linkedin"><a href="https://www.linkedin.com/company/wofx-world-furniture-expo/"
                  target="_blank" title=""></a></p>
                <p className="instagram"><a href=" https://www.instagram.com/wofx_worldexpo/?hl=en"
                  target="_blank" title=""></a></p>
                <p className="whatsapp"><a
                  href="https://api.whatsapp.com/send?phone=919819567106&&text=Hello%2C+I+am+interested+to+receive+more+information+about+WOFX+-+World+Furniture+Expo.+Thank+You!"
                  target="_blank" title=""></a></p>
              </div>
              <div>
              <div className='flex  gap-1 mt-3'>
              <a className='w-10 h-10  flex justify-center items-center hover:border hover:bg-white hover:text-black rounded' href="https://www.facebook.com/worldfurnitureexpo"><FontAwesomeIcon className='text-xl' icon={faFacebookF} /></a>
              <a className='w-10 h-10  flex justify-center items-center hover:border hover:bg-white hover:text-black rounded' href="https://twitter.com/WORLDFURNITURE4"><FontAwesomeIcon className='text-xl' icon={faXTwitter} /></a>
              <a className='w-10 h-10  flex justify-center items-center hover:border hover:bg-white hover:text-black rounded' href="https://www.instagram.com/wofx_worldexpo/?hl=en"><FontAwesomeIcon className='text-xl' icon={faInstagram} /></a>
              <a className='w-10 h-10  flex justify-center items-center hover:border hover:bg-white hover:text-black rounded' href="https://www.linkedin.com/company/wofx-world-furniture-expo/"><FontAwesomeIcon className='text-xl' icon={faLinkedin} /></a>
              <a className='w-10 h-10  flex justify-center items-center hover:border hover:bg-white hover:text-black rounded' href="https://api.whatsapp.com/send?phone=919819567106&amp;&amp;text=Hello%2C+I+am+interested+to+receive+more+information+about+WOFX+-+World+Furniture+Expo.+Thank+You!"><FontAwesomeIcon className='text-xl' icon={faWhatsapp} /></a>
              </div>
            </div>
            </div>
          </div>
          <center style={{background:"#000000",}} className='text-slate-300 py-4'>© WOFX 2025 | All Rights Reserved.</center>
          
        </div>
      </footer>

    </>
  )
}

export default Footer
