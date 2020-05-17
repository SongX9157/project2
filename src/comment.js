import React from 'react';

export function Comment(props){
    const comment = props.comment;
    return(
        <div className="Comment1">
            <div className="date">
    <p>{comment.year}/{comment.month}/{comment.month}</p>
            </div>
            <div className="message">
                {comment.message}
            </div>
        </div>
    );
}