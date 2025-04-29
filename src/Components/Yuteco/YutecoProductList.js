import classes from './YutecoProductList.module.css';


const YutecoProductList = (data) => {
    const inst = [...data.catalogProps];

    return (inst.map(product =>
        <li className={classes.elementWrap} key={product.key}>
            <img className={classes.elementImg} src={product.targetImg} />
            <div className={classes.productContent}>
                <p className={classes.elementDesc}>{product.title}</p>
                <section className={classes.elementDets}>
                    <a>{product.list_items.list_1}</a>
                    <a>{product.list_items.list_2}</a>
                    <a>{product.list_items.list_3}</a>
                    <a>{product.list_items.list_4}</a>
                </section>
            </div>
        </li>
    ))
};

export default YutecoProductList;