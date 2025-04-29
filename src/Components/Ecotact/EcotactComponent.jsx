import './EcotactComponent.css';
import EcotactAbout from './EcotactAbout/EcotactAbout';
import ProductShowcase from './ProductShowcase/ProductShowcase';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import ecotactLogo from '../../imgs/ecotact-logo.png';

const EcotactComponent = () => {
    return (
        <>
            <img className='ecotact-logo' src={ecotactLogo} alt='ecotact logo' />
            <div className='ecotact-section-container'>
                <EcotactAbout />
                <ProductShowcase />
                <ProductCatalog />
            </div>
        </>
    )
};

export default EcotactComponent;