import React from "react";

function Button(props) {
    return (
        <button style={style.button} {...props} >{props.text}</button>
    );
}

const style = {
    button:{
        border: "none",
        background: "#1F77CB",
        padding: "20px 35px",
        borderRadius: "30px",
        color:"white",
        fontSize:"18px"
        }
}

export default Button;