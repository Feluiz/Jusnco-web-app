import './CustomFooter.css';
import footerBg from '../../../imgs/footer-bg.png';
import filledLogo from '../../../imgs/main-logo-filled.png';


const CustomFooter = () => {
    return (
        <>
            <div className='footer-top'>
                <img className='footer-top-bg' alt='countryside-farm' src={footerBg} />
                <div className='footer-logo-div'>
                    <p className='rigths-text'>Powered by</p>
                    <p className='Devuiz'>Devuiz</p>
                </div>
            </div>
        </>
    )
};

export default CustomFooter;