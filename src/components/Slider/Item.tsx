import Link from 'next/link';
import { AiFillPlayCircle } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imgNotFound } from '../../constants/utils';

interface ItemType {
    item: any;
    type?: string;
    radio?: string;
}

const Item = ({ item, type, radio = '1/1' }: ItemType) => {
    return (
        <div>
            <Link
                href={
                    item.type
                        ? `/${item.type.toLowerCase()}/${item.key}`
                        : type?.toLowerCase()
                        ? `/${type?.toLowerCase()}/${item.key}`
                        : '#'
                }
                className={`block w-full rounded-md hover-animation overflow-hidden`}
                style={{ aspectRatio: radio }}
            >
                <div className='hover:scale-[1.1] ease-in duration-[400ms]'>
                    <LazyLoadImage
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = imgNotFound;
                        }}
                        src={
                            (item.imageUrl ||
                                item.thumbnail ||
                                item.thumbURL) ??
                            imgNotFound
                        }
                        alt={item.title}
                        effect='blur'
                        width='100%'
                        height='100%'
                        className='rounded-md relative'
                    />
                    <div className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center xl:text-[56px] text-[40px] text-white hidden'>
                        <div
                            className='hover:scale-[1.2] brightness-100 duration-[400ms]'
                            title='Phát'
                        >
                            <AiFillPlayCircle />
                        </div>
                    </div>
                </div>
            </Link>
            <div className='mt-2'>
                <Link
                    href={
                        item.type
                            ? `/${item.type.toLowerCase()}/${item.key}`
                            : type
                            ? `/${type}/${item.key}`
                            : '#'
                    }
                    className='line-clamp-1'
                >
                    <p className='hover:text-second-color text-sm font-medium truncate'>
                        {item?.title}
                    </p>
                </Link>
                <Link href='#'>
                    <p className='hover:text-second-color text-13px text-main-color truncate'>
                        {item?.artists
                            ?.map((item: any) => item.name)
                            .join(', ')}
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Item;
