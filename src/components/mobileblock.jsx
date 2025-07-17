import React from 'react';
import "../index.css";

export default function MobileBlock() {
    return (
        <div 
            className="visible sm:invisible absolute inset-0 z-50 flex justify-center items-center text-4xl text-cyan-50"
            style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
        >
            Open the website on PC Pls!!!
        </div>
    );
}
