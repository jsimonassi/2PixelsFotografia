import React, { useState } from 'react';

const Video = () => {

    return (
        <div style={{width:'100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center'}}>
            <iframe src='https://www.youtube.com/embed/x0eYvFNTCLU?autoplay=1&loop=1'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                width='100%'
                height='480px'
                auto
            />
        </div>
    );
}


export default Video;