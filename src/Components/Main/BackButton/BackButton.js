import { useState } from 'react';
import './BackButton.css';

const BackButton = (props) => {

    const clickedOption = () => {
        props.props.actions('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='mainBackBtn btn-hover' onClick={clickedOption}>
            <p>Regresar al inicio</p>
        </div>
    )
};

export default BackButton;