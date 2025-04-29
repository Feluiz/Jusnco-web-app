import './ProductShowcase.css';
import { section_shipshield } from '../CatalogDatabase';

const ProductShowcase = () => {
    return (
        <>
            <div className='product-showcase'>
                <div className='img-container'>
                    <img src={section_shipshield[0].targetImg} alt='ecotact container liner' className='img-showcase' />
                </div>
                <div className='details-container'>
                    <h3 className='showcase-title'>{section_shipshield[0].title}</h3>
                    <p className='showcase-info'>{section_shipshield[0].info}</p>
                </div>
            </div>
        </>
    )
};

export default ProductShowcase;