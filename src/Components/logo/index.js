import React from 'react';
import logo from "../../assets/logo.png";


function Logo(props) {
    return (
        <div className='logo'>
            <img {...props} src={logo} alt={props.alt}  />
        </div>
    );
}

export default Logo;