import React, { useCallback, useRef } from 'react'
import {v4 as uuidv4} from 'uuid'
import './style.css'

import Input from './Input'
import Button from './Button'
import Post from './Post'
import ChatAlert from './ChatAlert'
import { sendReq, scrollPosts, menu } from '../scripts/main'
import { useSelector } from 'react-redux'

function PostContainer(props) {

    const someone = useSelector(state => state.posts.value.someone)
    const posts = useSelector(state => state.posts.value.posts)
    const postRef = useRef(null)

    const renderPosts = useCallback((posts) => {
        return Object.entries(posts).map(([key, postData]) => {
            return <Post user={postData.user} post={postData.post} date={postData.date} key={uuidv4()} />
        })
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        sendReq()
    }, [])

    return (
        someone === undefined ?
            <div id='bannerc'>
                <div id="banner">
                    <Button text='Menu' action={menu} />
                </div>
                <ChatAlert alert='Unete a un chat!'/>
            </div>
            :
            <div id='postc'>
                <div id="someone">
                    {someone} 
                    {window.innerHeight < 700 && <Button text='Menu' action={menu} />}
                </div>
                <div id="posts" onScroll={scrollPosts} ref={postRef}>
                    { posts.length < 1 ? 
                        <ChatAlert alert='Escribe un mensaje!'/>
                        :
                        <div id='postcont'>
                            {renderPosts(posts)}
                        </div>
                    }
                </div>
                <form id="text" onSubmit={handleSubmit}>
                    <Input text='post'/>
                    <Button text='send' type='submit'/>
                </form>
            </div>
    )
}

export default PostContainer