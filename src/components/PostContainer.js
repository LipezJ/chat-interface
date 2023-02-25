import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import './style.css'

import Input from './Input';
import Button from './Button';
import Post from './Post';
import ChatAlert from './ChatAlert'
import { sendReq, ePost, scrollPosts, menu } from '../scripts/main'

function PostContainer(props) {
    const [posts, setPosts] = useState([])
    const [someone, setSomeone] = useState()
    const updatePost = (post) => {
        const posts_ = Object.entries(post).map(([key, item]) => {
            return <Post user={item.user} post={item.post} date={item.date} key={key} />;
        });
        setPosts(posts_)
    }
    const addPost = (user, post, date) => {
        setPosts(prevPosts => [...prevPosts, <Post user={user} post={post} date={date} key={uuidv4()} />]);
    }
    const recargePost = (data) => {
        const posts_ = Object.entries(data).map(([key, item]) => {
            return <Post user={item.user} post={item.post} date={item.date} key={key} />;
        });
        setPosts(prevPosts => [...posts_, ...prevPosts]);
    }
    ePost(updatePost, setSomeone, setPosts, addPost, recargePost,  posts, someone)
    return (
        someone === undefined ?
            <div id='bannerc'>
                <div id="banner">
                    <Button text='Menu' action={menu} />
                </div>
                <ChatAlert alert='Unete a un chat!'/>
            </div>
            :
            <React.Fragment>
                <div id='postc'>
                    <div id="someone">
                        {someone} 
                        {window.innerHeight < 700 && <Button text='Menu' action={menu} />}
                    </div>
                    <div id="posts" onScroll={scrollPosts}>
                        { posts.length < 1 ? 
                            <ChatAlert alert='Escribe un mensaje!'/>
                            :
                            <div id='postcont'>
                                {posts}
                            </div>
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