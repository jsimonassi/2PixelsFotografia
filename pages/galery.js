import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Galery from '../components/Galery/Galery';
import GaleryHeader from '../components/GaleryHeader/GaleryHeader';

export default function Home() {
    return (
        <div>
            <Head>
                <title>2Pixels Fotografia</title>
                <meta name='robots' content='index/follow' />
                <meta name='description' content='Registrando momentos em Itaboraí e região' />
            </Head>
            <Header />
            <div style={{ marginLeft: '10%', marginRight: '10%', marginTop: '150px' }}>
                <GaleryHeader />
                <Galery />
            </div>
        </div>
    );
}