import { useState, useRef, useEffect } from 'react';
import MenuItem from './MenuItem';
import Logo from './Logo';
import { menus } from './menu';

const Menu = () => {
    const settingRef = useRef<HTMLDivElement | any>();
    const [openSetting, setOpenSetting] = useState(false);
    useEffect(() => {
        const handler = (e: { target: any }) => {
            if (!settingRef?.current?.contains(e.target)) {
                setOpenSetting(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        <header className='leading-navbar min-h-navbar'>
            <div className='container'>
                <div className='flex w-full'>
                    <div className='w-full min-h-navbar'>
                        <nav className='flex items-center justify-between'>
                            <Logo width={100} height={40} />
                            <ul className='flex items-center justify-start'>
                                {menus.map((menu) => {
                                    return (
                                        <MenuItem item={menu} key={menu.name} />
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Menu;
