import classes from './ContactSection.module.css';
import mainLogo from '../../../imgs/main-logo-filled.png';

const ContactSection = () => {
    return (
        <>
            <section className={classes.contactSectContainer}>
                <section className={classes.contactInfoContainer}>
                    <img src={mainLogo} alt='main logo w backgroung' />
                    <section className={classes.contactInfo}>
                        <p>Prolongación Insurgentes 191, María Auxiliadora, 29290. San Cristóbal de las Casas, Chiapas</p>
                        <a href='tel: +52-967-134-4617' className={classes.contactItem}>+52-967-134-4617</a>
                        <a href='mailto: ventas@jusnco.com' className={classes.contactItem}>ventas@jusnco.com</a>
                        <a href='mailto: ted@jusnco.com' className={classes.contactItem}>ted@jusnco.com</a>
                        <a href='mailto: administracion@jusnco.com' className={classes.contactItem}>administracion@jusnco.com</a>
                    </section>
                </section>
                <section className={classes.mapContainer}>
                    <iframe className={classes.mapEmbedding} width="600" height="400" styles={"border:0"} loading="lazy"
                        src="https://www.google.com/maps/embed/v1/search?q=JUS%26CO%20S.A.%20DE%20C.V.%2C%20Prolongacion%20Insurgentes%2C%20Mar%C3%ADa%20Auxiliadora%2C%20San%20Cristobal%20de%20las%20Casas%2C%20Chis.%2C%20Mexico&key="></iframe>
                </section>
            </section>
        </>
    )
};

export default ContactSection;