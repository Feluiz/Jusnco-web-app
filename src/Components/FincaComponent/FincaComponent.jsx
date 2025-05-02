import classes from './FincaComponent.module.css';
import IntroComponent from './IntroComponent/IntroComponent';
import SignatureComponent from './SignatureComponent/SignatureComponent';
import LocationComponent from './LocationComponent/LocationComponent';
import coeLogo from '../../imgs/Finca/coe-logo.png';
import coe19 from '../../imgs/Finca/coe-19.png';
import coe21 from '../../imgs/Finca/coe-21.png';
import coe22 from '../../imgs/Finca/coe-22.png';

const FincaComponent = (props) => {
    return (
        <>
            <div className={classes.fincaHeader}>
                <IntroComponent />
            </div>
            <div className={classes.fincaBody}>
                <div className={classes.ribbonContainer}>
                    <img className={classes.blueRibbon} src={coe21} alt='2021 winner ribbon' />
                    <img className={classes.imgCoe19} src={coe19} alt='2019 winner ribbon' />
                    <img className={classes.blueRibbon} src={coe22} alt='2022 winner ribbon' />
                </div>
                <div className={classes.centerText}>
                    <img src={coeLogo} alt='coe logo' />
                </div>
            </div>
            <LocationComponent />
            <div className={classes.fincaHarvest}>
                <SignatureComponent />
            </div>
        </>
    )
};

export default FincaComponent;