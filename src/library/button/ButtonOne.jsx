import { useState } from 'react';
import './ButtonOne.css'

function ButtonOne () {
    const [count, setCount] = useState(0)
    return(
        <>
            <button 
            className='main' 
            onClick={() => setCount((count) => count + 1)}>
            count is {count}</button>
        </>
    )
}

export default ButtonOne;