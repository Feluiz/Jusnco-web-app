import './ServiceBar.css';
import img1 from '../../../imgs/ecotact-logo.png';
import img11 from '../../../imgs/gallery/backgr-1.jpg';
import img2 from '../../../imgs/yuteco/yuteco-logo.png';
import img22 from '../../../imgs/gallery/yute.webp';
import img3 from '../../../imgs/Finca/finca-logo.png';
import img33 from '../../../imgs/gallery/finca.webp'

const ServiceBar = (tabData) => {
    const selection = tabData.onClickedTab;

    const openService = (event) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        selection(event.currentTarget.id);
    };

    return (
        <>
            <div className='service-wrap'>
                <h2>Haz click para visitar nuestros servicios</h2>
                <nav className='sevice-bar'>
                    <ul className='service-list'>
                        <li onClick={openService} id='ecotact' className='service-container'>
                            <div className='service-container-overlay'></div>
                            <img src={img1} className='bg-img' />
                            <div className='service-hover'>
                                <img src={img11} alt='img-1' className='service-img' />
                            </div>
                        </li>
                        <li id='finca' className='service-container' onClick={openService.bind(this)}>
                            <div className='service-container-overlay'></div>
                            <img src={img3} className='bg-img-esp' />
                            <div className='service-hover'>
                                <img src={img33} alt='img-3' className='service-img' />
                            </div>
                        </li>
                        <li id='yuteco' className='service-container' onClick={openService}>
                            <div className='service-container-overlay'></div>
                            <img src={img2} className='bg-img' />
                            <div className='service-hover'>
                                <img src={img22} alt='img-2' className='service-img' />
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
};

export default ServiceBar;