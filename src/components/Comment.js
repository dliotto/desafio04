import React from 'react';

function Comment({key, author, content}){
        return(
            <>
            <span key={key} className="comment">
                <div>{author.name}</div>
                <div>{content}</div>
            </span>
            </>
        );
}

export default Comment;