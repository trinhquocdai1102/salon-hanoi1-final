import Head from 'next/head';
import Error from '../src/components/Common/Error';

const ForbiddenPage = () => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>Trang không tồn tại</title>
            </Head>
            <Error />
        </>
    );
};

export default ForbiddenPage;
