import React from 'react';

const MyButton = (props) => {
    const { style, onClick, className} = props;


    return (
        <button
            className={className}
            style={style}
            onClick={onClick}
        >
            {props.children}
        </button>
    );
}

export default MyButton;
