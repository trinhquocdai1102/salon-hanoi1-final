import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Select from 'react-select';
import { carBrand, condition, maxODO, sortBy } from './search';
import { AiFillCar } from 'react-icons/ai';
import Slider from 'rc-slider';
import { cars } from '../../fakedata/Home';
import { ROUTES } from '../../components/routes/routes';
import CarInfo from './CarInfo';
import Pagination from '../../components/Common/Pagination';
import Link from 'next/link';
import { Img } from 'react-image';
import { NumericFormat } from 'react-number-format';

const SearchComponent = () => {
    const yearBegin = 2010;
    const [year, setYear] = useState<any[]>([]);
    const [searching, setSearching] = useState(false);
    const [fake, setFake] = useState<any>([]);

    const [searchValue, setSearchValue] = useState<any>({
        condition: {
            label: 'Xe hiện có',
            value: 'all',
        },
        carBrand: {
            label: 'Thương hiệu',
            value: 'all',
        },
        maxODO: {
            label: 'Max ODO',
            value: 'all',
        },
        year: {
            label: yearBegin,
            value: yearBegin,
        },
        price: [100000000, 1000000000],
    });

    const handleResetAll = () => {
        setSearchValue({
            condition: {
                label: 'Xe hiện có',
                value: 'all',
            },
            carBrand: {
                label: 'Thương hiệu',
                value: 'all',
            },
            maxODO: {
                label: 'Max ODO',
                value: 'all',
            },
            price: [100000000, 1000000000],
        });
    };

    useEffect(() => {
        const now = new Date().getFullYear();
        let year = [];
        for (let value = yearBegin; value <= now; value++) {
            year.push({ label: value, value: value });
        }
        setYear(year);
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
            res.json().then((data) => setFake(data))
        );
    }, []);

    return (
        <div className='pt-[60px]'>
            <div className='container rounded-sm'>
                <div className='border-b border-main pb-[60px]'>
                    <h1 className='font-bold text-base uppercase mb-2'>
                        Tìm xe
                    </h1>
                    <div className='w-full relative search'>
                        <input
                            type='text'
                            className={`bg-main w-full py-[10px] pl-4 pr-[60px] focus:outline focus:outline-1 focus:outline-top-navbar rounded-sm cursor-pointer`}
                            placeholder='Tìm kiếm xe ...'
                            onFocus={() => setSearching(true)}
                            onBlur={() => setSearching(false)}
                        />
                        <div className='absolute right-0 top-0 bottom-0 flex items-center w-[44px] justify-center rounded-tr-sm rounded-br-sm'>
                            <BsSearch
                                className={`relative z-[1] search-icon text-sm ${
                                    searching ? 'text-search-icon' : ''
                                }`}
                            />
                            <div
                                className={`search-icon-bg absolute bg-top-navbar ${
                                    searching ? 'left-0' : 'left-[40px]'
                                }  right-0 top-0 bottom-0 flex items-center justify-center z-[0] ease-linear duration-300`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 mt-[20px]'>
                    <div className='relative w-full md:w-1/3'>
                        <div className='absolute right-0 left-0 search-option w-full flex flex-col gap-4 px-5 pb-5 pt-[52px] bg-white rounded-sm drop-shadow-lg'>
                            <div className='absolute flex items-center justify-center bg-top-navbar left-0 right-0 top-[-48px] h-[80px]'>
                                <span className='flex items-center gap-2  text-white'>
                                    <AiFillCar className='text-[32px]' />
                                    <span className='font-semibold text-base'>
                                        Tìm kiếm chi tiết
                                    </span>
                                </span>
                            </div>
                            <div>
                                <Select
                                    options={condition}
                                    defaultValue={searchValue.condition}
                                />
                            </div>
                            <div>
                                <Select
                                    options={carBrand}
                                    defaultValue={searchValue.carBrand}
                                />
                            </div>
                            <div>
                                <Select
                                    options={maxODO}
                                    defaultValue={searchValue.maxODO}
                                />
                            </div>
                            <div>
                                <Select
                                    options={year}
                                    defaultValue={
                                        searchValue && searchValue.year
                                    }
                                />
                            </div>
                            <div>
                                <h1 className='mt-4 mb-2'>Giá</h1>
                                <div className='px-1'>
                                    <Slider
                                        range
                                        min={100000000}
                                        max={1000000000}
                                        value={searchValue.price}
                                        onChange={(value: number[] | any) =>
                                            setSearchValue({
                                                ...value,
                                                price: [value[0], value[1]],
                                            })
                                        }
                                    />
                                </div>
                                <div className='flex items-center md:flex-col lg:flex-row justify-between gap-2 mt-2 text-sm'>
                                    <div className='bg-main py-[6px] px-[12px] rounded-sm min-w-[120px]'>
                                        <NumericFormat
                                            value={searchValue.price[0]}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                    </div>
                                    <div className='bg-main py-[6px] px-[12px] rounded-sm min-w-[120px]'>
                                        <NumericFormat
                                            value={searchValue.price[1]}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-center text-white mt-[20px]'>
                                <button
                                    onClick={handleResetAll}
                                    className='bg-top-navbar px-5 py-3 w-2/3 rounded-sm hover:opacity-90'
                                >
                                    Đặt lại tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full pl-5 md:w-2/3'>
                        <div className='flex items-center border-b border-main gap-2 pb-[20px]'>
                            <span className='text-sm'>Lọc theo:</span>
                            <div className='search-option text-xs'>
                                <Select
                                    options={sortBy}
                                    defaultValue={sortBy[0]}
                                    styles={{
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            display: 'flex',
                                            alignSelf: 'center',
                                            height: '32px',
                                            paddingLeft: '0 !important',
                                            minHeight: 'unset',
                                        }),
                                    }}
                                />
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className='flex flex-col gap-2'>
                                {cars.slice(0, 2).map((car) => {
                                    return (
                                        <Link
                                            href={`${ROUTES.carDetail}/${car.key}`}
                                            className='flex gap-5 [&:not(:first-child)]:pt-[40px] border-b border-main pb-[20px] last:border-0'
                                            key={car.key}
                                        >
                                            <div className='max-w-[210px]'>
                                                <Img
                                                    src={car.imageUrl}
                                                    alt=''
                                                    className='rounded-sm'
                                                />
                                            </div>
                                            <CarInfo car={car} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[20px]'>
                    <Pagination data={fake} />
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
