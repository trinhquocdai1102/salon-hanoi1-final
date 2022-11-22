import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPositions';

interface MenuItemType {
    name: string;
    path: string | null;
    background?: string;
}

interface MenuItemProps {
    item: MenuItemType;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
    const { scrollY } = useWindowScrollPositions();
    const location = useRouter();

    return (
        <li
            className={`px-[20px] font-medium ${
                item?.path === location.pathname ? 'text-txt-navbar' : ''
            }`}
        >
            <Link
                href={item.path ? item.path : '#'}
                className='block font-medium text-[13px] uppercase ease'
            >
                {item.name}
            </Link>
        </li>
    );
};

export default MenuItem;
