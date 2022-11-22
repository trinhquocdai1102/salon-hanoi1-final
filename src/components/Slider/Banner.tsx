import { FC } from 'react';

interface BannerProps {
    banner?: any[];
}

const Banner: FC<BannerProps> = ({ banner }) => {
    return (
        <div
            className='h-[400px] mt-navbar relative bg-cover'
            style={{
                background: "url('/images/banner.png') center center no-repeat",
            }}
        >
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-third'></div>
        </div>
    );
};

export default Banner;
