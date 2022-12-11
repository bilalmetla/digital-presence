import React from 'react';
import {Button, Logo, } from "../../Components";

function Header() {
    return (
        <div style={style}>
            <Logo style={{width:"300px"}}  />
            <div>
                <Button to="/bussiness-requirement" text={"Get Started"} />
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