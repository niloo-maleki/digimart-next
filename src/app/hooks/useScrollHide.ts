import { useEffect, useState, useRef } from 'react';

const useScrollHide = () => {
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop.current) {
                setHideOnScroll(true);
            } else {
                setHideOnScroll(false);
            }

            lastScrollTop.current = currentScroll;
        };

        const optimizeScroll = () => {
            window.requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', optimizeScroll);

        return () => {
            window.removeEventListener('scroll', optimizeScroll);
        };
    }, []);

    return hideOnScroll;
};

export default useScrollHide;
