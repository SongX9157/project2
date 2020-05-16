import React from 'react';

export function Tag(props){
    const tag = props.tag;
    return(
        <div className="Tag">
            <div className="date">
                <span className="hex">{tag.month}{tag.day}</span>
            </div>
            <div className="message">
                {tag.message}
            </div>
            <button>ADD</button>
        </div>
    );
}