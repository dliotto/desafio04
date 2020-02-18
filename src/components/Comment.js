import React from 'react';

function Comment({key, author, content}){
        return(
            <>
            <div key={key} className="comment">
                <div className="imagem"><img src={author.avatar} /></div>
                <div className="content">
                    <span>{author.name}</span>
                    {content}
                </div>
            </div>
            </>
        );
}

export default Comment;