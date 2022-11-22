import { createContext, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

interface MenuContextState {
    menuRef: any;
    openMenu: boolean;
    setOpenMenu: Function;
    isHomepage: boolean;
}

export const MenuContext = createContext<MenuContextState>({
    menuRef: [],
    openMenu: false,
    setOpenMenu: () => {},
    isHomepage: false,
});

export const MenuContextProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const menuRef = useRef<HTMLDivElement | any>();
    const [openMenu, setOpenMenu] = useState(false);
    const [isHomepage, setIsHomepage] = useState(false);
    const location = useRouter();

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHomepage(true);
        } else {
            setIsHomepage(false);
        }
    }, [location]);

    const MenuContextData = {
        menuRef,
        openMenu,
        setOpenMenu,
        isHomepage,
    };

    return (
        <MenuContext.Provider value={MenuContextData}>
            {children}
        </MenuContext.Provider>
    );
};
