import React from 'react';


function Logo(props) {
    return (
        <div className='logo'>
            <img {...props} src={props.image} alt={"logoImg"}  />
        </div>
    );
}

export default Logo;