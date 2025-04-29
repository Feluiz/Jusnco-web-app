import './InstagramSection.css';
import whiteInstagram from '../../../imgs/white-instagram.png'
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramSection = () => {
    return (
        <>
            <div className='social-card'>
                <a className='social-media-top' href='https://www.instagram.com/jusnco_sa_de_cv/'>
                    <img className='instagram-logo' src={whiteInstagram} />
                    <h5>Siguenos en Instagram!</h5>
                </a>
                <div className='social-media' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='social-embed1'>
                        <InstagramEmbed
                            url='https://www.instagram.com/p/CxCDgYTtX5W/'
                            height={362}
                        />
                        <div className='layover'></div>
                    </div>
                    <div className='social-embed2'>
                        <InstagramEmbed className='embedding'
                            url='https://www.instagram.com/p/CuZpXZZrdBh/'
                            height={410}
                        />
                    </div>
                    <div className='social-embed3'>
                        <InstagramEmbed
                            url='https://www.instagram.com/p/CzsTcJ8h_i7/'
                            height={362}
                        />
                        <div className='layover'></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default InstagramSection;