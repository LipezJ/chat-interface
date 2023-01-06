import React, { useState } from 'react';
import './style.css'

import Input from './Input';
import Button from './Button';
import Post from './Post';
import ChatAlert from './ChatAlert'
import { sendReq, ePost } from '../scripts/main'

let key = 0

function PostContainer(props) {
    const [posts, setPosts] = useState([])
    const [someone, setSomeone] = useState()
    const updatePost = (post) => {
        key = 0
        const posts_ = Object.values(post).map(item => {
            key++
            return <Post user={item.user} post={item.post} key={key} />;
        });
        setPosts(posts_)
    }
    const addPost = (user, post) => {
        setPosts(prevPosts => [...prevPosts, <Post user={user} post={post} key={Date.now()} />]);
    }
    ePost(updatePost, setSomeone, setPosts, addPost)
    return (
        someone === undefined ?
            <ChatAlert alert='Unete a un chat!'/>
            :
            <React.Fragment>
                <div id='postc'>
                    <div id="someone">{someone}</div>
                    <div id="posts">
                        { posts.length < 1 ? 
                            <ChatAlert alert='Escribe un mensaje!'/>
                            :
                            <React.Fragment>
                                {posts}
                            </React.Fragment>
                        }
                    </div>
                    <div id="text">
                        <Input text='post' user={props.user} chat={someone}/>
                        <Button text='send' user={props.user} action={sendReq} chat={someone}/>
                    </div>
                </div>
            </React.Fragment>
    );
}

export default PostContainer;