import React from 'react';
import logo from './assest/img/GloboLogo.png'

const Header = () =>{
    return (
        <header className='row'>
            <div className="col-md-5">
                <img src={logo} className='logo' alt=""/>
            </div>
            <div className="col-md-7 mt-5 subtitle">
                Providing House all over the world
            </div>
        </header>
    );
}

export default Header;