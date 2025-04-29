import classes from './CustomizationBar.module.css';
import img1 from '../../../imgs/yuteco/custom-bag1.jpg';
import img2 from '../../../imgs/yuteco/custom-bag2.webp';
import img3 from '../../../imgs/yuteco/custom-bag3.webp';
import img4 from '../../../imgs/yuteco/custom-bag4.webp';

const CustomizationBar = () => {
    return(
        <div className={classes.barContainer}>
            <div className={classes.barImgsContainer}>
                <img className={classes.barImg} src={img1} />
                <img className={classes.barImg} src={img2} />
                <img className={classes.barImg} src={img3} />
                <img className={classes.barImg} src={img4} />
            </div>
        </div>
    )
};

export default CustomizationBar;