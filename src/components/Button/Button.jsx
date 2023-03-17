import React from 'react';
import { NavLink } from 'react-router-dom';
import "./button.scss"
const Button = ({txt}) => {
    return (
        <>
            <NavLink to="/" className="heroBtnn">{txt} </NavLink>
        </>
    );
};

export default Button;