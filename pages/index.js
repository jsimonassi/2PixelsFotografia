import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Background from '../components/Background/Background';
import Video from '../components/Video/Video';

export default function Home() {
  return (
    <div>
      <Head>
        <title>2Pixels Fotografia</title>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='Registrando momentos em Itaboraí e região'/>
      </Head>
      <Background/>
      <Header/>
      <Video/>
    </div>
  );
}