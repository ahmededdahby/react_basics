import React from 'react'
import "./Button.css"
interface Props{
    children: string;
    color: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

function Button({onClick ,color ,children}:Props) {
    return (
        <div>
            <button type="button"
                className="button"
                // className={"btn btn-" + color}
                onClick={onClick}>
                {children}
        </button>

        </div>
    )
}

export default Button
