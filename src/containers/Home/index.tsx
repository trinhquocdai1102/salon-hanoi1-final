import { useState } from 'react';
import { segments } from './home';
import { cars } from '../../fakedata/Home';
import GridLayout from '../../components/layout/GridLayout';
import { ROUTES } from '../../components/routes/routes';
import { Img } from 'react-image';
import Link from 'next/link';

const HomeComponent = () => {
    const [chooseSegment, setChooseSegment] = useState(1);

    return (
        <>
            <div className='w-full mt-0 md:mt-navbar bg-main pb-[120px] min-h-screen'>
                <div className='relative' id='top'>
                    <video
                        autoPlay
                        muted
                        loop
                        id='bg-video'
                        className='min-w-full min-h-screen max-w-full max-h-full object-cover z-[-1]'
                        src='./images/video.mp4'
                    />

                    <div className='absolute bg-third top-0 left-0 right-0 bottom-0 w-full'>
                        <div className='absolute w-4/5 top-0 right-0 left-0 bottom-0 flex items-center justify-center mx-auto'>
                            <div className='text-center text-white'>
                                <h6 className='text-xl'>Salon Hà Nội 1</h6>
                                <h2 className='text-[60px] lg:text-[76px] font-extrabold uppercase'>
                                    <span className='text-txt-highlight'>
                                        Cửa hàng bán xe
                                    </span>{' '}
                                    tốt nhất!
                                </h2>
                                <div className='main-button mt-4'>
                                    <Link
                                        href='/contact'
                                        className='bg-txt-highlight py-3 px-4 rounded-sm'
                                    >
                                        Liên hệ ngay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-top-navbar'>
                        <div className='container pt-[80px]'>
                            <div className='flex items-center gap-1'>
                                {segments.map((segment) => {
                                    return (
                                        <div
                                            key={segment.name}
                                            className={`${
                                                chooseSegment === segment.value
                                                    ? 'bg-white text-top-navbar'
                                                    : 'bg-main text-txt-third'
                                            } px-5 py-3 font-bold uppercase cursor-pointer rounded-sm text-sm hover:bg-white hover:text-top-navbar`}
                                            onClick={() =>
                                                setChooseSegment(segment.value)
                                            }
                                        >
                                            {segment.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='pt-[60px] container'>
                        {chooseSegment === 1 ? (
                            <>
                                <GridLayout col={4}>
                                    {cars.slice(0, 8).map((car) => {
                                        return (
                                            <div
                                                key={car.key}
                                                className='px-3'
                                                title={car.name}
                                            >
                                                <Link
                                                    href={`${ROUTES.carDetail}/${car.key}`}
                                                >
                                                    <div>
                                                        <Img
                                                            src={car.imageUrl}
                                                            alt={car.name}
                                                            className='object-cover h-[160px] rounded-md'
                                                        />
                                                    </div>
                                                    <div
                                                        className='mt-2 pb-2 font-semibold border-b border-txt-main'
                                                        title={car.name}
                                                    >
                                                        <p className='w-full truncate'>
                                                            {car.name}
                                                        </p>
                                                    </div>
                                                    <div className='pt-2 pb-4 text-sm'>
                                                        Giá bán:
                                                        <span className='ml-2 font-medium'>
                                                            {car.price}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </GridLayout>
                                <div className='w-full flex items-center justify-center mt-[40px]'>
                                    <Link
                                        href={ROUTES.search}
                                        className='p-2 bg-top-navbar text-white font-medium uppercase rounded-sm'
                                    >
                                        Tất cả sản phẩm
                                    </Link>
                                </div>
                            </>
                        ) : chooseSegment === 2 ? (
                            'xe moi'
                        ) : (
                            'xe cu'
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;
