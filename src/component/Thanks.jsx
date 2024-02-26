import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'
import LinkBlog from './Home/LinkBlog'
import fine from '../image/fine.png'

const Thanks = () => {
    return (
        <div className="max-auto max-w-[160rem] h-full mx-auto pt-[20px] lg:pt-0 overflow-hidden relative">
            <Header />

            {/* ваши данные отправлены */}
            <div className='w-3/4 h-auto mx-auto mt-[rem] md:mt-[10rem] 2xl:mt-[12rem] border-[var(--primary-color)] rounded-[20px] border-[2px]'>
                <h1 className='heading-text px-[4rem] pt-[40px] sm:pt-[60px] 2xl:pt-[80px]'><span>ваши данные отправлены</span></h1>
                <img src={fine} className='w-[80px] lg:w-[90px] 2xl:w-[110px] h-auto mx-auto pt-[40px] lg:pt-[60px]' alt="fine" />
                <p className='uppercase px-[4rem] text-white oswald text-[1.5rem] lg:text-[2.6rem] 2xl:text-[2.9rem] text-center pt-[40px] lg:pt-[60px] pb-[20px] '>наш менеджер свяжется с вами в ближайшее время</p>
                <a href='/'><p className='underline px-[4rem] text-gray-500 oswald text-[1rem] lg:text-[2rem] 2xl:text-[2.3rem] text-center pb-[50px] 2xl:pb-[100px]'>Пока ждете звонка, почитайте успешно реализованные кейсы</p></a>
            </div>

            {/* Мини блог */}
            <LinkBlog />

            <Footer />
        </div>
    )
}

export default Thanks
