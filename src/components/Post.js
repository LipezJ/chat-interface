import React from 'react';
import './style.css';

import Video from './Video';
import { userContext } from '../App';

function Post(props) {
    let video = props.post.match(/https:\/\/www.youtube.com/) && props.post.match(/[a-zA-Z0-9]+$/)
    return (
        <userContext.Consumer>
            {({user, setUser}) => {
                return(
                    <div className="posts" style={user === props.user ? {"display": "flex", "alignSelf": "end"}:{}}>
                        <div className="owner">{user !== props.user && props.user+':'}</div>
                        {    
                            !video ?
                            <div className="post">{props.post}</div>
                            :
                            <Video link={props.post.match(/https:\/\/www.youtube.com\/watch\?v=[a-zA-Z0-9-]+/)[0].replace(/watch\?v=/, 'embed/')}/>
                        }
                    </div>
                    )
                }
            }
        </userContext.Consumer>
    );
}

export default Post;