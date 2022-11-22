import { useState, useEffect } from 'react';

const useInnerWidth = () => {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' && window.innerWidth
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            window?.addEventListener('resize', handleResize);

            return () => window?.removeEventListener('resize', handleResize);
        }
    }, []);

    return {
        isPC: width > 1280,
        isLaptop: width > 1024,
        isTablet: width > 768,
        isMobile: width > 640,
        width,
    };
};

export default useInnerWidth;
