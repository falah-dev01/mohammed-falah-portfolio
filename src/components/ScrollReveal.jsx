import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
