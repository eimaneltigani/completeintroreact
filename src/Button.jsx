import React from 'react';


const Button = ({ clickAction, increment }) => {
    return (
        <button onClick={clickAction}>
            {`+${increment}`}
        </button>
    )
}

export default Button;