import React, { useState } from 'react';
import GaleryForm from './GaleryForm';

const GaleryHeader = () => {

    return (
        <div style={{
            backgroundImage: 'url("images/galleryBackground.gif")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 'auto',
            width: '100vw',
            backgroundColor: 'black',
            paddingLeft: '15%',
            paddingRight: '15%',
        }}>
            <div style={{ height: '100px' }}></div>
            <h3 style={{ fontSize: 'calc(12px + 1.5vw)', color: '#fff' }}>GALERIA DE ENSAIOS</h3>
            <h1 style={{ fontWeight: "bold", fontSize: 'calc(12px + 4vw)', color: '#fff' }}>2Pixels Fotografia</h1>
            <br />
            <GaleryForm />
        </div>

    );
}


export default GaleryHeader;