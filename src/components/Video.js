import React from 'react';
import './style.css'

function Video(props) {
    return (
        <iframe src={props.link} autoPlay title={props.link} className='video'></iframe>
    );
}

export default Video;