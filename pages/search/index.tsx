import Head from 'next/head';
import Banner from '../../src/components/Slider/Banner';
import SearchComponent from '../../src/containers/Search';

const Search = () => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>Tìm kiếm - Salon Hà Nội 1</title>
            </Head>
            <Banner />
            <SearchComponent />
        </>
    );
};

export default Search;
