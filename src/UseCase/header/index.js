import React from 'react';
import { useLocation } from 'react-router-dom'
import {Button, Logo, } from "../../Components";

function Header() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div style={style}>
            <Logo style={{width:"300px", height:"100px"}}  />
            <div>
                { location.pathname !== '/' && <Button to="/" text={"Home"} /> }
                { location.pathname !== '/bussiness-requirement' && <Button to="/bussiness-requirement" text={"Get Started"} /> }
            </div>

        </div>
    )
}

const style = {
	marginBottom:"100px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop:"50px",
    alignItems:"centerbaseline"
}

export default Header;