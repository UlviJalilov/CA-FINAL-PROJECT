'use client';

import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const CloseableBanner = () => {
    const [visible, setVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const isClosed = localStorage.getItem('adBannerClosed');
        if (isClosed === 'true') {
            setVisible(false);
            setShouldRender(false);
        }
    }, []);

    const handleClose = () => {
        setVisible(false);
        localStorage.setItem('adBannerClosed', 'true');
        setTimeout(() => setShouldRender(false), 300);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`transition-all bg-[#292929] duration-300 overflow-hidden ${visible ? 'opacity-100 py-4' : 'opacity-0 max-h-0 py-0'
                }`}
        >
            <div className="font-secondary flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 px-2 md:px-4 text-center">
                <h2 className="text-white font-medium text-[12px] sm:text-[13px] md:text-[14px]">
                    MID-SEASON SALE UP TO 70% OFF. USE CODE: “SALE70”. SHOP NOW
                </h2>
                <span className="cursor-pointer mt-2 md:mt-0" onClick={handleClose}>
                    <IoClose className="text-[#ccc]" size={20} />
                </span>
            </div>
        </div>

    );
};

export default CloseableBanner;
