import Link from 'next/link';
import { FC } from 'react';
import { Img } from 'react-image';
import { ROUTES } from '../routes/routes';

interface LogoProps {
    width: string | number;
    height: string | number;
}

const Logo: FC<LogoProps> = ({ width, height }) => {
    return (
        <Link href={ROUTES.home}>
            <div
                style={{ width: width, height: height }}
                className='rounded-md flex items-center justify-center'
            >
                <Img
                    // onError={({ currentTarget }) => {
                    //     currentTarget.onerror = null;
                    //     currentTarget.src = avatarDefault;
                    // }}
                    src={'./images/logo.png'}
                    alt='logo'
                />
            </div>
        </Link>
    );
};

export default Logo;
