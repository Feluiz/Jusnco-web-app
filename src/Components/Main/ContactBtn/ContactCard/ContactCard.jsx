import './ContactCard.css';
import instagramIcon from '../../../../imgs/instagram-icon.png';
import facebookIcon from '../../../../imgs/facebook-icon.png';
import whatsappIcon from '../../../../imgs/whatsapp-icon.png';

const ContactCard = () => {
    return (
        <div className='contact-menu-card'>
            <a href='https://www.instagram.com/jusnco_sa_de_cv/' className='social-instagram'>
                <img className='social-btn-img' src={instagramIcon} />
                {/* <p>Instagram</p> */}
            </a>
            <a href='https://www.facebook.com/Jusnco' className='social-facebook'>
                <img className='social-btn-img' src={facebookIcon} />
                {/* <p>JUS & CO Sa. de Cv.</p> */}
            </a>
            <a href='https://wa.me/529671344617' className='social-whatsapp'>
                <img className='social-btn-img' src={whatsappIcon} />
                {/* <p>967-134-4617</p> */}
            </a>
        </div>
    )
};

export default ContactCard;