import React from 'react';
import './style.css';

function Post(props) {
    return (
        <div className="posts">
            <div className="owner">{props.user}:</div>
            <div className="post">{props.post}</div>
        </div>
    );
}

export default Post;