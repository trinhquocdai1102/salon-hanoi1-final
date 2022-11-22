import '../src/styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainLayout from '../src/components/layout/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
    const location = useRouter();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
