import { FC, useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Footer from '../Footer';
import Menu from '../Menu';
import TopMenu from '../Menu/TopMenu';
import { MenuContext } from '../../context/MenuContext';
import useInnerWidth from '../../hooks/useInnerWidth';
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPositions';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const { isTablet } = useInnerWidth();
    const { scrollY } = useWindowScrollPositions();
    const [tablet, setTablet] = useState(false);

    const { setOpenMenu, menuRef, isHomepage } = useContext(MenuContext);

    useEffect(() => {
        const handler = (e: { target: any }) => {
            if (!menuRef?.current?.contains(e.target)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    useEffect(() => {
        isTablet ? setTablet(true) : setTablet(false);
    }, []);

    return (
        <div className='bg-main'>
            {!tablet && (
                <div className='flex items-center justify-between py-4 px-4 text-[28px] border-b'>
                    <div>
                        <AiOutlineMenu
                            className='cursor-pointer'
                            onClick={() => setOpenMenu(true)}
                        />
                    </div>
                </div>
            )}
            <div className='w-full m-auto'>
                {tablet && (
                    <div ref={menuRef} className='w-full m-auto'>
                        <div className='bg-top-navbar'>
                            <TopMenu />
                        </div>
                        <div
                            className={`${
                                isHomepage && scrollY >= 500
                                    ? 'fixed bg-white text-txt-main top-0 left-0 right-0'
                                    : !isHomepage && scrollY >= 300
                                    ? 'fixed bg-white text-txt-main top-0 left-0 right-0'
                                    : 'bg-navbar text-white relative'
                            } z-[998] drop-shadow-lg`}
                        >
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
            <div className='relative'>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
