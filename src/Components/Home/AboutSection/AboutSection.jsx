import './AboutSection.css';
import { info, info2 } from './info'

const AboutSection = () => {
    return (
        <>
            <section className='about-section'>
                <div className='about-title'>
                    <h1>Sobre nosotros</h1>
                </div>
                <div className='about-text'>
                    <p>{info}</p>
                    <p>{info2}</p>
                </div>
            </section>
        </>
    )
};

export default AboutSection;