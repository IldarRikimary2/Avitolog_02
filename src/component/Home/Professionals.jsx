import React from 'react'
import designer from '../../image/designer.png'
import marketing from '../../image/marketing.png'
import seo from '../../image/seo.png'
import analyst from '../../image/analyst.png'
import LazyImage from '../UI/LazyImage';


const Professionals = () => {
    return (
        <div className='max-w-[120rem] mx-auto h-[auto] mt-12 rounded-[40px]' id="about">
            <h2 className=' px-[5rem] uppercase oswald text-center text-[2rem] sm:text-[2.7rem] lg:text-[3rem] 2xl:text-[4rem] text-white font-semibold pt-24 tracking-[0.1rem]'>Профессионалы, создающие проект</h2>

            <div className=' sm:w-3/4 mx-[1rem] xs:mx-[6rem] md:mx-auto flex flex-wrap justify-evenly'>
                {/* 1 */}
                <div className='relative  w-full lg:w-1/2 xl:w-1/4 h-auto'>
                    <LazyImage src={marketing} alt="Icon" className='photo-prof lg:mx-auto ' />
                    <div className='z-[-1] green-prof left-[12rem] sm:left-[20rem] md:left-[30rem] '>
                        <p className='text-prof oswald'>
                            Разработка маркетинговой стратегии, упаковка профиля, выявление портрета целевой аудитории, позиционирование аккаунта на площадке
                        </p>
                    </div>
                </div>
                {/* 2 */}
                <div className='relative w-[30rem] sm:w-[50rem] md:w-[60rem] lg:w-1/2 xl:w-1/4 h-auto'>
                    <LazyImage src={analyst} alt="Icon" className='photo-prof float-right lg:float-none lg:mx-auto' />
                    <div className='z-[-1] green-prof left-[2rem] sm:left-[10rem] md:left-[7rem]'>
                        <p className='text-prof oswald '>
                            Разработка технической стратегии выкладки объявлений, обход блокировок, анализ конкурентов, сбор их УТП, просчет услуг платного продвижения
                        </p>
                    </div>
                </div>
                {/* 3 */}
                <div className='relative w-full lg:w-1/2 xl:w-1/4 h-auto'>
                    <LazyImage src={seo} alt="Icon" className='photo-prof lg:mx-auto' />
                    <div className='z-[-1] green-prof left-[12rem] sm:left-[20rem] md:left-[30rem]'>
                        <p className='text-prof oswald'>
                            Разработка продающих текстов, сбор семантического ядра, упаковка преимуществ клиента
                        </p>
                    </div>
                </div>
                {/* 4 */}
                <div className='relative w-[30rem] sm:w-[50rem] md:w-[60rem]  lg:w-1/2 xl:w-1/4 h-auto'>
                    <LazyImage src={designer} alt="Icon" className=' photo-prof float-right lg:float-none lg:mx-auto'/>
                    <div className='z-[-1] green-prof left-[2rem] sm:left-[10rem] md:left-[7rem]'>
                        <p className='text-prof oswald '>
                            Разработка кликабельных креативов, дизайна, общего стиля магазина, оформление инфографики, лого
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professionals
