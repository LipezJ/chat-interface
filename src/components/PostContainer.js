import React, { useState } from 'react';
import './style.css'

import Input from './Input';
import Button from './Button';
import Post from './Post';
import ChatAlert from './ChatAlert'
import { send, ePost } from '../scripts/main'

function PostContainer(props) {
    const [posts, setPosts] = useState([''])
    const [someone, setSomeone] = useState()
    const addPost = (user, post) => {
        setPosts(oldPosts => [...oldPosts, <Post user={user} post={post} key={posts.length}/>]);
        console.log(posts)
    }
    ePost(addPost, setSomeone)
    return (
        someone === undefined ?
            <ChatAlert alert='Unete a un chat!'/>
            :
            <React.Fragment>
                <div id='postc'>
                    <div id="someone">{someone}</div>
                    <div id="posts">
                        { posts.length < 2 ? 
                            <ChatAlert alert='Escribe un mensaje!'/>
                            :
                            posts
                        }
                    </div>
                    <div id="text">
                        <Input text='post' user={props.user}/>
                        <Button text='send' user={props.user} action={send}/>
                    </div>
                </div>
            </React.Fragment>
    );
}

export default PostContainer;