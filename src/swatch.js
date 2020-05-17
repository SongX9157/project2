import React from 'react';

export function Tag(props){
    const tag = props.tag;
    return(
        <div className="Tag">
        
            <div className="message">
                {tag.style}
            </div>
        </div>
    );
}