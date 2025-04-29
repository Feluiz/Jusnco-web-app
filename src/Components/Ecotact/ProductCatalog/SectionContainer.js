import './SectionContainer.css';
import ProductList from './ProductList';

const SectionContainer = (data) => {
    const catalogBody = [...data.props];
    const headerBody = [...data.sampleProps];

    return (
        <div className='section-container'>
            <div className='section-header'>
                <div className='header-img-container'>
                    <img src={headerBody[0].targetImg} alt='header image' className='header-img' />
                </div>
                <h2 className='header-title'>{headerBody[0].title}</h2>
                <p className='header-info'>{headerBody[0].sampleInfo}</p>
            </div>
            <div>
                <ul className='section-product-list'>
                    <ProductList catalogProps={catalogBody} funct={data.setItem} funct2={data.setOpen} />
                </ul>
            </div>
        </div>
    )
};

export default SectionContainer;