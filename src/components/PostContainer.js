import React, { useState } from 'react';
import './style.css'

import Input from './Input';
import Button from './Button';
import Post from './Post';
import { send, ePost } from '../scripts/main'

function PostContainer(props) {
    const [posts, setPosts] = useState([''])
    const [someone, setSomeone] = useState('Someone')
    const addPost = (user, post) => {
        setPosts(oldPosts => [...oldPosts, <Post user={user} post={post} key={posts.length}/>]);
        console.log(posts)
    }
    ePost(addPost, setSomeone)
    return (
        <div id='postc'>
            <div id="someone">{someone}</div>
                <div id="posts">
                    { posts.length < 2 ? 
                        'Unete a un chat'
                        :
                        posts
                    }
                </div>
                <div id="text">
                    <Input text='post'/>
                    <Button text='send' user={props.user} action={send}/>
            </div>
        </div>
    );
}

export default PostContainer;