import { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronDown } from 'react-icons/bs';
import GridLayout from '../layout/GridLayout';
import { ROUTES } from '../routes/routes';
import Link from 'next/link';
import { Img } from 'react-image';
import CarInfo from '../../containers/Search/CarInfo';

interface PaginationProps {
    data: any;
}

const Pagination: FC<PaginationProps> = ({ data }) => {
    const [currentItems, setCurrentItems] = useState<any>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    const handlePageChange = (e: { selected: number }) => {
        const newOffset = (e.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length) / itemsPerPage);
    }, [data, itemsPerPage, itemOffset]);

    return (
        <>
            <GridLayout col={3} gapX={30} gapY={30}>
                {currentItems.slice(2, currentItems.length).map((car: any) => {
                    return (
                        <Link
                            href={`${ROUTES.carDetail}/${car.key}`}
                            className='bg-white drop-shadow-lg p-4 rounded-sm'
                            key={car.key}
                        >
                            <div className='w-full'>
                                <Img
                                    src={car.imageUrl}
                                    alt=''
                                    className='rounded-sm object-cover h-[240px]'
                                />
                            </div>
                            <CarInfo car={car} />
                        </Link>
                    );
                })}
            </GridLayout>
            <ReactPaginate
                breakLabel='...'
                nextLabel={<BsChevronDown className='rotate-[-90deg]' />}
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<BsChevronDown className='rotate-90' />}
                containerClassName='pagination mt-[40px]'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </>
    );
};

export default Pagination;
