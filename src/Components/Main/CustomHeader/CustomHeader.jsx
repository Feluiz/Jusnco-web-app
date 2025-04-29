import { useState } from 'react';
import './CustomHeader.css';
import logo from '../../../imgs/main-logo.png';
import { NavLink } from 'react-router';

const CustomHeader = (props) => {
    const [open, setOpen] = useState(true);
    const [bar2, setBar2] = useState('container');
    const [dropopen, setDropopen] = useState('dropdownclosed');

    const clickedOption = () => {
        setBar2('container');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        props.actions('home');
        setDropopen('dropdownclosed');
        setOpen(true);
    };

    const clickedOption2 = () => {
        props.actions('home');
        window.scrollTo({ top: 1250, behavior: 'smooth' });
        setDropopen('dropdownclosed');
        setBar2('container');
        setOpen(true);
    };

    const clickedOption3 = () => {
        props.actions('home');
        window.scrollTo({ top: 3280, behavior: 'smooth' });
        setDropopen('dropdownclosed');
        setBar2('container');
        setOpen(true);
    };

    const clickedOption3__alt = () => {
        props.actions('home');
        window.scrollTo({ top: 2600, behavior: 'smooth' });
        setDropopen('dropdownclosed');
        setBar2('container');
        setOpen(true);
    };


    const myFunction = () => {
        !open ? setOpen(true) : setOpen(false);
        open ? setBar2('container change') : setBar2('container');
        open ? setDropopen('nav-bar-dropdown') : setDropopen('dropdownclosed');
    }

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className={bar2} onClick={myFunction}>
                <div className="change bar1"></div>
                <div className="change bar2"></div>
                <div className="change bar3"></div>
            </div>
            <div className={dropopen}>
                <NavLink to="/" className='dropdown-option'>Inicio</NavLink>
                <a onClick={clickedOption2} className='dropdown-option'>Nosotros</a>
                <a onClick={clickedOption3} className='dropdown-option'>Visítanos</a>
            </div>
            <nav className='nav-bar'>
                <NavLink to="/" onClick={clickedOption} className='navbar-option'>Inicio</NavLink>
                <a onClick={clickedOption2} className='navbar-option'>Nosotros</a>
                <a onClick={clickedOption3__alt} className='navbar-option'>Visítanos</a>
            </nav>
        </header>
    )
};

export default CustomHeader;