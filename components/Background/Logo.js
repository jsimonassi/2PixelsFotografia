import React, { useState } from 'react';

const Logo = () => {
    return (
        <div>
            <div style={{
                position: 'absolute',
                top: '0px',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                opacity: 0.5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <div style={{
                position: 'absolute',
                top: '0px',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src='images/big-icon.png' style={{ maxHeight: '300px', height: 'auto', width: 'auto' }}></img>
            </div>
        </div>
    );
}

export default Logo;