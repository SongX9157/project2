import React from 'react';

export function Comment(props){
    const comment = props.comment;
    return(
        <div className="Comment1">
            <div className="date">
                <span className="hex">{comment.month}{comment.day}</span>
            </div>
            <div className="message">
                {comment.message}
            </div>
            <button>ADD</button>
        </div>
    );
}