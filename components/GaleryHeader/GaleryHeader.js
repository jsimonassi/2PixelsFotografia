import React, { useState } from 'react';
import GaleryForm from './GaleryForm';

const GaleryHeader = () => {

    return (
        <div>
            <h1>Galeria de ensaios</h1>
            <br/>
            <GaleryForm/>
        </div>
        
    );
}


export default GaleryHeader;