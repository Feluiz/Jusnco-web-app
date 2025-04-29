import { useState } from 'react';
import './ContactBtn.css';
import contactImg from '../../../imgs/msg-icon.png';
import ContactCard from './ContactCard/ContactCard';

const ContactBtn = () => {
    const [ socialMenu, setSocialMenu] = useState(false);
    const contactMenu = () => {
        setSocialMenu((prev) => (!prev));
    };

    return (
        <>
            <div className='contact-button' onClick={contactMenu}>
                <img src={contactImg} className='contact-btn-img' alt='contact image' />
                {socialMenu ? <ContactCard /> : null}
            </div>
        </>
    )
};

export default ContactBtn;