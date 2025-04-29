import classes from './IntroComponent.module.css';
import fincaLogo from '../../../imgs/Finca/finca-logo-alt.png';
import fincaImg1 from '../../../imgs/Finca/finca-header-1.webp';
import fincaImg2 from '../../../imgs/Finca/finca-header-2.webp';

const IntroComponent = () => {
    return (
        <div className={classes.fincaComponentContainer}>
            <img className={classes.headerImage2} src={fincaImg2} alt='finca image 2' />
            <div className={classes.centerElement}>
                <img src={fincaLogo} alt='logo finca' />
            </div>
            <img className={classes.headerImage1} src={fincaImg1} alt='finca image 1' />
        </div>
    )
};

export default IntroComponent;