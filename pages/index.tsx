import type { NextPage } from 'next';
import Head from 'next/head';
import HomeComponent from '../src/containers/Home';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <HomeComponent />
        </>
    );
};

export default Home;
