import React from 'react';

export function Swatch(props){
    const swatch = props.swatch;
    return(
        <div className="swatch">
            <div className="date">
                <span className="hex">{swatch.month}{swatch.day}</span>
            </div>
            <div className="message">
                {swatch.message}
            </div>
            <button>ADD</button>
        </div>
    );
}