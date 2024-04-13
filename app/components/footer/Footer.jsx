import Image from 'next/image'
import style from './footer.module.css'
import logo from '../../../public/assests/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <>
      <footer>
        <div className={style.maincontainer}>
          <div className={style.nesteddiv}>
            <h3 className='text-xl text-slate-200 font-bold'>ORGANISED BY</h3>
            <Image src={logo} width={185} height='auto' alt="" />
            <p className='text-slate-300' style={{ paddingTop: "13px" }}>309, Parvati Premises, Sun Mill Complex, <br />
              Lower Parel (W), Mumbai - 400 013, India </p>
            <a className='text-slate-300' href="tel:(+91) 022-4037-6700">(+91) 022-4037-6700</a><br />
            <a className='text-slate-300' href="mailto:contactus@worldexindia.com">contactus@worldexindia.com</a>
          </div>
          <div className={style.nesteddiv}>
            <h3 className='text-xl text-slate-200 font-bold'>QUICK LINKS</h3>
            <p className='text-slate-300'>
              <a href="exhibitor_enquiry.html" target="_blank">Exhibitor Enquiry Form</a><br />
              <a href="https://portal.wofxworldexpo.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=in&source_name="
                target="_blank">Buyer Registration Form</a><br />
              <a href="exhibitor-profile.html" target="_blank">Exhibitor Profile</a><br />
              <a href="buyer-profile.html" target="_blank">Buyer Profile</a><br />
              <a href="terms-conditions.html" target="_blank">Terms and Conditions</a>
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


          </div>

        </div>
        <div className="social-footer">
  <p><a href="https://www.facebook.com/worldfurnitureexpo" target="_blank" title=""></a></p>
  <p className="twitter"><a href="https://twitter.com/WORLDFURNITURE4" target="_blank" title=""></a></p>
  <p className="linkedin"><a href="https://www.linkedin.com/company/wofx-world-furniture-expo/" target="_blank" title=""></a></p>
  <p className="instagram"><a href=" https://www.instagram.com/wofx_worldexpo/?hl=en" target="_blank" title=""></a></p>
  <p className="whatsapp"><a href="https://api.whatsapp.com/send?phone=919819567106&&text=Hello%2C+I+am+interested+to+receive+more+information+about+WOFX+-+World+Furniture+Expo.+Thank+You!" target="_blank" title=""></a></p>
</div>

      </footer>

    </>
  )
}

export default Footer