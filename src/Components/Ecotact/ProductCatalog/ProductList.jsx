import './ProductList.css';


const ProductList = (data) => {
    const inst = [...data.catalogProps];
    const power = data.funct;
    const power2 = data.funct2;

    return (inst.map(product =>
        <li
            className='elementWrap'
            key={product.key}
            onClick={() => {
                power(product);
                power2(true)
            }}>
            <img className='elementImg' src={product.targetImg} />
            <p className='elementDesc'>{product.title}</p>
        </li>
    ))
};

export default ProductList;