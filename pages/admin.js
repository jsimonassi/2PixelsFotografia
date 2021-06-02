import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Background from '../components/IndexComponents/Background/Background';
import Video from '../components/IndexComponents/Video/Video';

export default function Home() {
  return (
    <div>
      <Head>
        <title>2Pixels Fotografia</title>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='Registrando momentos em Itaboraí e região' />
      </Head> 
     <h4>Upload de arquivos - 2Pixels Fotografia</h4>
     
    </div>
  );
}