import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import './style.css'

import Input from './Input';
import Button from './Button';
import Post from './Post';
import ChatAlert from './ChatAlert'
import { sendReq, ePost, scrollPosts } from '../scripts/main'


function PostContainer(props) {
    const [posts, setPosts] = useState([])
    const [someone, setSomeone] = useState()
    const updatePost = (post) => {
        const posts_ = Object.entries(post).map(([key, item]) => {
            return <Post user={item.user} post={item.post} key={key} />;
        });
        setPosts(posts_)
    }
    const addPost = (user, post) => {
        setPosts(prevPosts => [...prevPosts, <Post user={user} post={post} key={uuidv4()} />]);
    }
    ePost(updatePost, setSomeone, setPosts, addPost, posts, someone)
    return (
        someone === undefined ?
            <ChatAlert alert='Unete a un chat!'/>
            :
            <React.Fragment>
                <div id='postc'>
                    <div id="someone">{someone}</div>
                    <div id="posts" onScroll={scrollPosts}>
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