import React from 'react';

export function Swatch(){
    return(
        <div className="swatch">
            <span className="hex">#000000</span>
            <span className="delete-button">&#x2716;</span>
            <span className="name">name</span>
            <button>ADD</button>
        </div>
    );
}