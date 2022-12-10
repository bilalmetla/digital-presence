import React from "react";

function Link(props) {
    return (
       // <a {...props} href="#">{props.text}</a>
		<p {...props} >{props.text}</p>
    );
}

export default Link;