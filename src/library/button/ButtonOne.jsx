import { useState } from 'react';
import './ButtonOne.css'

function ButtonOne () {
    const [count, setCount] = useState('LLEVAR')
    return(
        <>
            <button 
            className='main' 
            onClick={() => setCount(prev => prev === 'LLEVAR' ? 'AQUI' : 'LLEVAR')}>
            PARA {count}</button>
        </>
    )
}

export default ButtonOne;