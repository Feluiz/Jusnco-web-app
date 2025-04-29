import './YutecoComponent.css';
import YutecoProductList from './YutecoProductList';
import YutecoCatalogData from './YutecoCatalogData';
import CustomizationBar from './CustomizationBar/CustomizationBar';
import juteLogo from '../../imgs/yuteco/yuteco-logo.png';
import BackButton from '../Main/BackButton/BackButton';

const YutecoComponent = (props) => {
    return (
        <>
            <div className='yuteco-container'>
            <BackButton props={props}/>
                <div className='yuteco-header-container'>
                    <img src={juteLogo} className='yutecoLogo' alt='yuteco logo' />
                    <ul className='yuteco-catalog'>
                        <YutecoProductList catalogProps={YutecoCatalogData} />
                    </ul>
                </div>
            </div>
            <div className='yuteco-middle-container'>
                <div className='middle-panel'>
                    <p>Costalera <em>personalizable</em> con hasta cuatro colores</p>
                </div>
            </div>
            <div>
                <CustomizationBar />
            </div>
        </>
    )
};

export default YutecoComponent;