import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const GaleryForm = () => {

    return (
        <div>
            <Form>
                <FormGroup style={{display: 'inline'}}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Digite o nome da(o) modelo" />    <Button>Buscar</Button>
                
                </FormGroup>
                <br/>
            </Form>
            <br/>
            <br/>
        </div>
    );
}


export default GaleryForm;