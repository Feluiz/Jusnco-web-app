import classes from './SignatureComponent.module.css';
import pacheImg from '../../../imgs/Finca/pache.png';
import washedImg from '../../../imgs/Finca/washed-coffee.webp';
import naturalImg from '../../../imgs/Finca/natural-coffee.webp';
import honeyImg from '../../../imgs/Finca/honey-coffee.webp';

const SignatureComponent = () => {
    return (
        <div>
            <div className={classes.signatureHeader}>
                <p className={classes.processesText}>Nuestro café característico</p>
                <img className={classes.signatureName} src={pacheImg} alt='letras palabra pache' />
            </div>
            <div className={classes.processesContainer}>
                <p className={classes.processesText}>Nuestros procesos</p>
                <ul className={classes.processesList}>
                    <li className={classes.processItem}>
                        <img className={classes.processImg} src={washedImg} alt='washed coffee'/>
                        <p className={classes.coffeeProcess}>Lavado</p>
                    </li>
                    <li className={classes.processItem}>
                        <img className={classes.processImg} src={naturalImg} alt='natural coffee' />
                        <p className={classes.coffeeProcess}>Natural</p>
                    </li>
                    <li className={classes.processItem}>
                        <img className={classes.processImg} src={honeyImg} alt='honey coffee' />
                        <p className={classes.coffeeProcess}>Honey</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default SignatureComponent;