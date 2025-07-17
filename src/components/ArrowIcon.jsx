import React from 'react';
import '../index.css';

const ArrowIcon = ({color, className = '', path}) => {
    return(
        <svg
        width="24"
        height="24"
        viewBox='0 0 24 24'
        fill='none'
        stroke={color}
        strokeWidth='2.3'
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className}`}
        >          
           {path}
        </svg>
    );
};

export default ArrowIcon;