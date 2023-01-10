import React from 'react';
import './style.css';

import Video from './Video';

function Post(props) {
    let video = props.post.match(/https:\/\/www.youtube.com/) && props.post.match(/[a-zA-Z0-9]+$/)
    return (
        <div className="posts">
            <div className="owner">{props.user}:</div>
            {    
                !video ?
                <div className="post">{props.post}</div>
                :
                <Video link={props.post.match(/https:\/\/www.youtube.com\/watch\?v=[a-zA-Z0-9-]+/)[0].replace(/watch\?v=/, 'embed/')}/>
            }
        </div>
    );
}

export default Post;