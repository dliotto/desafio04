import React from 'react';
import Comment from './Comment';

function  Post({key, author, date, content, comments}){
    return(
        <div key={key} className="post">
            <div className="imagem"><img src={author.avatar} /></div>
            <div className="name">
                {author.name}
                <span className="date">{date}</span>
            </div>
            <p>
                {content}
            </p>
            {
                comments.map(comment =>
                    <Comment key={comment.id}
                        author={comment.author}
                        content={comment.content}
                    />
                )
            }
        </div>
    );
}

export default Post;