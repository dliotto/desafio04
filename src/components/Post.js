import React from 'react';
import Comment from './Comment';

function  Post({key, author, date, content, comments}){
    return(
        <div key={key} className="post">
            <span>
                {author.name}
                <br />
                <span>{date}</span>
            </span>
            <br />
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