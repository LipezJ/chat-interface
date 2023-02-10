import React from 'react';
import './style.css';

import Video from './Video';
import { userContext } from '../App';

function Post(props) {
    let video = (props.post.match(/https:\/\/www.youtube.com/) || props.post.match(/https:\/\/youtu.be/)) && props.post.match(/[=/][a-zA-Z0-9\-]+$/)
    return (
        <userContext.Consumer>
            {({user, setUser}) => {
                return(
                    <div className={"posts "+ (video && "vpost")} style={user === props.user ? {"display": "flex", "alignSelf": "end"}:{}}>
                        <div className="owner">{user !== props.user && props.user +":"}</div>
                        {    
                            !video ?
                            <div className="post">{props.post}</div>
                            :
                            <Video link={"https://www.youtube.com/embed/"+props.post.match(/[a-zA-Z0-9\-]+$/)[0]}/>
                        }
                    </div>
                    )
                }
            }
        </userContext.Consumer>
    );
}

export default Post;