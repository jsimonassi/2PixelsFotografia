import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Background from '../components/Index/Background/Background';
import Video from '../components/Index/Video/Video';
import { loadFirebase } from '../lib/firebaseConfig';
import { useEffect, useState } from 'react';

export default function Home() {

  //const [db, setDb] = useState(null);

  useEffect(async () => {
    console.log("ENTREI NO USE EFFECT");
    let firebase = await loadFirebase();
    let db = firebase.firestore()
    console.log('PEGUEI DB', db);
    db.collection('galery').get()
      .then((snapshot) => {
        console.log("response: ", snapshot);
        snapshot.forEach((doc) => {
          console.log('Este é um doc', doc);
        })
      }).catch((error) => {
        console.log("Deu erro")
      })
  }, []);

  return (
    <div>
      <Head>
        <title>2Pixels Fotografia</title>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='Registrando momentos em Itaboraí e região' />
      </Head>
      <Header />
      <Background/>
      <Video />
    </div>
  );
}