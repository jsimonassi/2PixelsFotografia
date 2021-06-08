import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Card, CardBody, Button
} from 'reactstrap';
import { uploadImagesToStorage } from '../lib/Api';

export default function Home() {

  const [fileList, setFileList] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [pathValue, setPathValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onChangeNameHandler = event => {
    setNameValue(event.target.value);
  };

  const onChangePathHandler = event => {
    setPathValue(event.target.value);
  };

  const onChangeUsernameHandler = event => {
    setUsernameValue(event.target.value);
  };

  const onChangePasswordHandler = event => {
    setPasswordValue(event.target.value);
  };

  const onDrop = useCallback(acceptedFiles => {
    console.log("Aceitei esses arquivos: ", acceptedFiles);
    setFileList(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const uploadInfos = () => {
    console.log("Fui clicado!", fileList, nameValue, pathValue);
    uploadImagesToStorage(fileList, pathValue, nameValue, usernameValue, passwordValue);
  }


  return (
    <div >
      <h1>Upload de arquivos - 2Pixels Fotografia</h1>
      <Card>
        <div style={{ backgroundColor: 'black', height: '50px' }} {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p style={{ color: 'white' }}>Solte os arquivos aqui</p> :
              <p style={{ color: 'white' }}>Arraste os novos arquivos , ou clique aqui</p>
          }
        </div>
        <CardBody>
          <br />
          <label>Nome: </label>
          <input
            type="text"
            name="name"
            onChange={onChangeNameHandler}
            value={nameValue}
          />
          <br />
          <label>Path: </label>
          <input
            type="text"
            name="path"
            onChange={onChangePathHandler}
            value={pathValue}
          />
          <br />
          <br />
          <label>Username: </label>
          <input
            type="text"
            name="username"
            onChange={onChangeUsernameHandler}
            value={usernameValue}
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="password"
            onChange={onChangePasswordHandler}
            value={passwordValue}
          />
          <br />
          <Button onClick={uploadInfos} >Enviar</Button>
        </CardBody>
      </Card>
    </div>
  )
}