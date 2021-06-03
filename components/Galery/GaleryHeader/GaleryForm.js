import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const GaleryForm = () => {

    return (
        <div style={{ display: 'inline-block', width: '100%' }}>
            <div style={{ display: 'inherit', width: '75%' }}>
                <Input style={{ width: '100%' }} type="text" name="modelName" id="modelId" placeholder="Digite o nome da(o) modelo" />
            </div >
            <div style={{ display: 'inherit' , marginLeft: '1%', width: '20%'}} >
                <Button >Buscar</Button>
            </div>
            <br />
            <br />
        </div>
    );
}


export default GaleryForm;