import React from 'react';
import './style.css';

import Video from './Video';
import { userContext } from '../App';
import { responseTo } from '../scripts/main'

function Post(props) {
    let video = (props.post.match(/https:\/\/www.youtube.com/) || props.post.match(/https:\/\/youtu.be/)) && props.post.match(/[=/][a-zA-Z0-9-]+$/)
    let date = new Date(props.date)
    let resReg = /^::RE[(](\w+):([\w\s,.:;-_"'?¡¿!|#$%&()+{}]+)[)]/
    return (
        <userContext.Consumer>
            {({user, setUser}) => {
                return(
                    <div 
                        className={"posts "+ (video && "vpost")} 
                        style={user === props.user ? {"display": "flex", "alignSelf": "end"}:{}}
                        onDoubleClick={responseTo}
                    >
                        <React.Fragment>
                            <div className="owner">{user !== props.user && props.user +":"}</div>
                            {
                                props.post.match(resReg) ?
                                (
                                <div className='response'>
                                    re {props.post.match(resReg)[1]}: {props.post.match(resReg)[2]}...
                                </div>
                                ):<div></div>
                            }
                            {    
                                !video ?
                                <React.Fragment>
                                    <div className="post">{props.post.replace(resReg, '')}</div>
                                    <div className="datepost">{date.getHours()}:{date.getMinutes()} {date.getDate()}/{date.getMonth()+1}</div>
                                </React.Fragment>
                                :
                                <Video link={"https://www.youtube.com/embed/"+props.post.match(/[a-zA-Z0-9-]+$/)[0]}/>
                            }
                        </React.Fragment>
                    </div>
                    )
                }
            }
        </userContext.Consumer>
    );
}

export default Post;