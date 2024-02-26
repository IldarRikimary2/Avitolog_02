import React, { useState } from 'react';
import russia from '../../image/map_Russia.png';
import message_1 from '../../image/message_avito_1.png';
import message_2 from '../../image/message_avito_2.png';
import message_3 from '../../image/message_avito_3.png';
import decoration_line from '../../image/decoration_line.png';
import MyButton from '../UI/Button';

const AvitoMessage = () => {
    const images = [
        message_1,
        message_2,
        message_3,
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const changeImage = (direction) => {
        if (direction === 'next') {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (direction === 'prev') {
            setActiveIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className='max-w-full mx-auto h-auto mt-24 relative ' id="reviews">
            <h2 className='heading-text' style={{ color: 'var(--primary-color)' }}>что говорят о нас наши клиенты</h2>
            {/* decoration */}
            <img className='absolute hidden md:inline-block top-[6rem] left-[40rem] lg:top-[6rem] lg:left-[57rem]' src={decoration_line} alt="" />

            <div className='inline-block 2xl:flex mt-[1.6rem] sm:mt-36 md:justify-center w-full relative'>
                {/* Message avito */}
                <div className='w-auto h-auto mx-[4rem] sm:mx-auto 2xl:mx-0'>
                    <div className='justify-center 2xl:justify-evenly flex'>
                        <button
                            onClick={() => changeImage('prev')}
                            className='nextArrowNoHover text-white'
                            style={{ fontSize: '30px', padding: '1px 20px' }}
                        >
                            &lt;
                        </button>

                        <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} className='my-auto max-w-[280px] md:max-w-[350px]' />

                        <button
                            onClick={() => changeImage('next')}
                            className='nextArrowNoHover text-white'
                            style={{ fontSize: '30px', padding: '1px 20px' }}
                        >
                            &gt;
                        </button>
                    </div>

                    {/* Three dots-points */}
                    <div className='flex justify-center mt-10'>
                        {[0, 1, 2].map((dotIndex) => (
                            <div
                                key={dotIndex}
                                className={`dot-point ${dotIndex === activeIndex ? 'active-dot-point' : ''}`}
                            ></div>
                        ))}
                    </div>
                    <MyButton className='btn-calc mt-[3rem] lg:mt-[3rem] mx-auto block' >
                        <a href='//www.avito.ru/brands/i36753956/all/predlozheniya_uslug?sellerId=f83708d03ecdc3a4ee4b7fd5b76da463' target="_blank" rel="noopener noreferrer">
                            Больше на авито
                        </a>
                    </MyButton>
                </div>

                {/* Image Russia */}
                <div className='justify-center flex 2xl:inline-block owerflow-hidden'>
                    <img src={russia} className='absolute min-w-[670px] lg:max-w-[700px] h-auto top-[-10rem] sm:top-[-6rem] left-[-4rem] sm:left-[0rem] lg:left-[23%] z-[-1] 2xl:static' alt="Map Russia" />
                    {/* Смотерть больше на авито */}
                </div>
            </div>
        </div>
    );
}

export default AvitoMessage;
