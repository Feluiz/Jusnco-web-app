import './EcotactAbout.css';
import customizable from '../../../imgs/ecotactCatalog/customizable.png';
import foodGrade from '../../../imgs/ecotactCatalog/food-grade.png';
import moistureLock from '../../../imgs/ecotactCatalog/moisture-lock.png';
import oxygenBarrier from '../../../imgs/ecotactCatalog/oxygen-barrier.png';
import recyclable from '../../../imgs/ecotactCatalog/recyclable.png';

const EcotactAbout = () => {
    return (
        <div className='information-section'>
            <div className='ecotact-about-text'>
                <div className='attributes-title'>
                    <p className='subtitle-1'><em>Lo mejor de Ecotact</em></p>
                    <p className='subtitle-2'><em>en un solo producto</em></p>
                </div>
                <div className='ecotact-attribute'>
                    <img src={customizable} alt='customizable icon' className='ecotact-attrImage' />
                    <p className='ecotact-attrName'>Personalización</p>
                </div>
                <div className='ecotact-attribute'>
                    <img src={foodGrade} alt='foodGrade icon' className='ecotact-attrImage' />
                    <p className='ecotact-attrName'>Grado Alimenticio</p>
                </div>
                <div className='ecotact-attribute'>
                    <img src={moistureLock} alt='moistureLock icon' className='ecotact-attrImage' />
                    <p className='ecotact-attrName'>Bloqueo de humedad</p>
                </div>
                <div className='ecotact-attribute'>
                    <img src={oxygenBarrier} alt='oxygenBarrier icon' className='ecotact-attrImage' />
                    <p className='ecotact-attrName'>Barrera alta al oxígeno</p>
                </div>
                <div className='ecotact-attribute'>
                    <img src={recyclable} alt='recyclable icon' className='ecotact-attrImage' />
                    <p className='ecotact-attrName'>Reciclable</p>
                </div>
            </div>
        </div>
    )
};

export default EcotactAbout;