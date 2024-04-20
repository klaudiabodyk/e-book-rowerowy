import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;

}

/**
 * LazyImage component that loads images only when they are in the viewport using IntersectionObserver
 */
const LazyImage = ({ src, alt, className, style, ...props }: LazyImageProps) => {
    const [imageSrc, setImageSrc] = useState('');
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setImageSrc(src);
                    observer.disconnect();
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src]);

    return (
        <div
            ref={imageRef}
            className={className}
            style={{ ...style, backgroundImage: imageSrc ? `url(${imageSrc})` : 'none' }}
            {...props}
        >
            {imageSrc ? null : <div className="loading-placeholder">Loading...</div>}
        </div>
    );
};

export default LazyImage;
