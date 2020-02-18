import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component{

    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "https://avatars0.githubusercontent.com/u/6189810?s=460&v=4"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Douglas Hartmann",
                  avatar: "https://avatars0.githubusercontent.com/u/6189810?s=460&v=4"
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Julio Alcantara",
              avatar: "https://avatars0.githubusercontent.com/u/6189810?s=460&v=4"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Douglas Hartmann",
                  avatar: "https://avatars0.githubusercontent.com/u/6189810?s=460&v=4"
                },
                content: "Conteúdo do comentário"
              },
              {
                id: 2,
                author: {
                  name: "Diego Fernandes",
                  avatar: "https://avatars0.githubusercontent.com/u/6189810?s=460&v=4"
                },
                content: "Conteúdo do comentário"
              }
            ]
          }
        ]
      };

    render(){
        return(
        <>
            <div id="post-list">
            {
                this.state.posts.map(post =>
                    <Post key={post.id}
                    author={post.author}
                    date={post.date}
                    content={post.content}
                    comments={post.comments}
                    />
                )
            }
            </div>
        </>
        );
    }
}

export default PostList;