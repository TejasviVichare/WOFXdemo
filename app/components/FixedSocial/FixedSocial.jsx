import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function FixedSocial() {
    return (
        <div>
            <div id="fixed-social">
                <div>
                    <a href="https://www.facebook.com/worldfurnitureexpo" class="fixed-facebook" target="_blank"><FontAwesomeIcon className='text-xl' icon={faFacebookF} /> <span>Facebook</span></a>
                </div>
                <div>
                    <a href="https://twitter.com/WORLDFURNITURE4" class="xtwitter" target="_blank"><FontAwesomeIcon className='text-xl' icon={faXTwitter} /> <span>Twitter</span></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/wofx-world-furniture-expo/" class="linkedIN" target="_blank"><FontAwesomeIcon className='text-xl' icon={faLinkedin} /> <span>LinkedIn</span></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/wofx_worldexpo/?hl=en" class="fixed-gplus" target="_blank"><FontAwesomeIcon className='text-xl' icon={faInstagram} /> <span>Instagram</span></a>
                </div>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=919819567106&&text=Hello%2C+I+am+interested+to+receive+more+information+about+WOFX - World Furniture Expo 2024.+Thank+you..%21%21" className="fixed-twitter" target="_blank">
                        <FontAwesomeIcon className='text-xl' icon={faWhatsapp} /> <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FixedSocial