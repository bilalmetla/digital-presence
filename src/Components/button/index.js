import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
	
    return (
        /* <button style={style.button} {...props} >{props.text}</button> */
		<Link style={style.button} {...props} to={props.to} >{props.text}</Link>
    );
}

const style = {
    button:{
		textDecoration: "none",
        border: "none",
        background: "#282876",
        padding: "20px 35px",
        borderRadius: "30px",
        color:"white",
        fontSize:"18px"
        }
}

export default Button;