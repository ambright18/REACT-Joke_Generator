import React from "react";
import './Button.css'

const Button = (props) => {
    return(
        <button onClick={props.callApi}>
            Click to generate joke
        </button>
    )
}
export default Button;