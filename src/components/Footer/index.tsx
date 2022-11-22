import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { ROUTES } from '../routes/routes';

const Footer = () => {
    const { isHomepage } = useContext(MenuContext);
    return (
        <div
            className={`${
                isHomepage ? 'bg-main' : ''
            } w-full py-[40px] flex items-center justify-center text-[13px]`}
        >
            <p>
                Copyright © 2022 Salon Hà Nội 1 - More information:{' '}
                <Link href={ROUTES.contact} className='text-txt-highlight'>
                    Salon Hà Nội 1
                </Link>
            </p>
        </div>
    );
};

export default Footer;
