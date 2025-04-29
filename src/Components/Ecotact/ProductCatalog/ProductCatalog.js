import './ProductCatalog.css';
import Modal from '../../Main/Modal/Modal';
import SectionContainer from './SectionContainer';
import * as CatalogData from '../CatalogDatabase';

import { useState } from 'react';

const ProductCatalog = () => {
    const [item, setItem] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className='catalog-container'>
            <SectionContainer props={CatalogData.section_special} sampleProps={CatalogData.section_special_sample} setOpen={setOpen} setItem={setItem}/>
            <SectionContainer props={CatalogData.section_vacuum} sampleProps={CatalogData.section_vacuum_sample} setOpen={setOpen} setItem={setItem}/>
            <SectionContainer props={CatalogData.section_export} sampleProps={CatalogData.section_export_sample} setOpen={setOpen} setItem={setItem}/>
            <SectionContainer props={CatalogData.section_sampler} sampleProps={CatalogData.section_sampler_sample} setOpen={setOpen} setItem={setItem}/>
            {open ? <Modal props={item} setOpen={setOpen} setItem={setItem}/> : null}
        </div>
    )
};

export default ProductCatalog;