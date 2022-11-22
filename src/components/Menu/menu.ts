import { AiOutlineHome } from 'react-icons/ai';
import { RiCarFill, RiSearchLine } from 'react-icons/ri';
import { MdLocationOn, MdRecommend } from 'react-icons/md';
import {
    BsFillMoonFill,
    BsFillSunFill,
    BsFillTelephoneFill,
} from 'react-icons/bs';
import {
    SiChevrolet,
    SiFord,
    SiHonda,
    SiHyundai,
    SiKia,
    SiMazda,
    SiMercedes,
    SiPeugeot,
    SiRenault,
    SiToyota,
} from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

export const menus = [
    {
        name: 'Trang Chủ',
        path: '/',
        background: '#3498db',
    },
    {
        name: 'Tìm Kiếm',
        path: '/search',
        background: '#2ecc71',
    },
    {
        name: 'Về chúng tôi',
        path: '/about-us',
        background: '#f1c40f',
    },
    {
        name: 'Tư vấn',
        path: '/contact',
        background: '#e67e22',
    },
];

export const sidebars = [
    {
        name: 'Tìm Kiếm',
        path: '/search',
        icon: RiSearchLine,
        parentPath: null,
        child: null,
        background: '#2ecc71',
    },
    {
        name: 'Trang Chủ',
        path: '/',
        icon: AiOutlineHome,
        parentPath: null,
        child: null,
        background: '#3498db',
    },
    {
        name: 'Hãng xe',
        path: null,
        icon: RiCarFill,
        parentPath: '/brands',
        child: [
            {
                name: 'Toyota',
                icon: SiToyota,
                path: '/brands/toyota',
            },
            {
                name: 'KIA',
                icon: SiKia,
                path: '/brands/kia',
            },
            {
                name: 'Hyundai',
                icon: SiHyundai,
                path: '/brands/hyundai',
            },
            {
                name: 'Mazda',
                icon: SiMazda,
                path: '/brands/mazda',
            },
            {
                name: 'Ford',
                icon: SiFord,
                path: '/brands/ford',
            },
            {
                name: 'Honda',
                icon: SiHonda,
                path: '/brands/honda',
            },
            {
                name: 'Chevrolet',
                icon: SiChevrolet,
                path: '/brands/chevrolet',
            },
            {
                name: 'Mercedes-Benz',
                icon: SiMercedes,
                path: '/brands/mercedes-benz',
            },
            {
                name: 'Peugeot',
                icon: SiPeugeot,
                path: '/brands/peugeot',
            },
            {
                name: 'Renault',
                icon: SiRenault,
                path: '/brands/renault',
            },
        ],
        background: '#f1c40f',
    },
    {
        name: 'Tư vấn',
        path: '/contact',
        icon: MdRecommend,
        parentPath: null,
        child: null,
        background: '#e67e22',
    },
];

export const topNav = [
    {
        key: uuidv4(),
        icon: MdLocationOn,
        content: '1B Nguyễn Văn Huyên, Nghĩa Đô, Cầu Giấy, Hà Nội',
        phone: null,
    },
    {
        key: uuidv4(),
        icon: BsFillTelephoneFill,
        content: null,
        phone: [
            {
                key: uuidv4(),
                phoneNumber: '0968680977',
            },
            {
                key: uuidv4(),
                phoneNumber: '0984965663',
            },
        ],
    },
];
