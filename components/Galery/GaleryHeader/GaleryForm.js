import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const GaleryForm = () => {

    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ display: 'inherit' }}>
                <Input style={{ width: '60vw' }} type="text" name="modelName" id="modelId" placeholder="Digite o nome da(o) modelo" />
            </div >
            <div style={{ display: 'inherit', marginLeft: '20px' }} >
                <Button >Buscar</Button>
            </div>
            <br />
            <br />
        </div>
    );
}


export default GaleryForm;