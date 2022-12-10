import React from 'react';
// import logoImage from '../../assets/logo.svg';
import {Button, Link, Logo, } from "../../Components";

function Header() {
    return (
        <div style={style}>
            <Logo style={{width:"300px"}}  />
            <div>
                <Link style={styles.link} 
                text={"Login for old users"} />
                <Button text={"Get Started"} />
            </div>

        </div>
    )
}

const style = {
    display: "flex",
    justifyContent: "space-between",
    paddingTop:"50px",
    alignItems:"centerbaseline"
}

const styles = {
    link:{
        textDecoration:"none",
        color:"black",
        marginRight:"10px"
    },
}

export default Header;