import React from "react";

function Link(props) {
    return (
        <a {...props} href="#">{props.text}</a>
    );
}

export default Link;