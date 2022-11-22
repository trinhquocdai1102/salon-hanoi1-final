import Head from 'next/head';
import React from 'react';
import ContactComponent from '../../src/containers/Contact';

const Contact = () => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>Liên hệ tư vấn - Salon Hà Nội 1</title>
            </Head>
            <ContactComponent />
        </>
    );
};

export default Contact;
