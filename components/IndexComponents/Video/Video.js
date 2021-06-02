import React, { useState } from 'react';
import ReactPlayer from 'react-player'

const Video = () => {

    return (
        <div style={{width:'100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center'}}>
            {/* <iframe src='https://www.youtube.com/embed/x0eYvFNTCLU?autoplay=1&loop=1'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                width='100%'
                height='auto'
            /> */}
            <ReactPlayer url='https://www.youtube.com/watch?v=x0eYvFNTCLU' 
            light
            />
        </div>
    );
}


export default Video;