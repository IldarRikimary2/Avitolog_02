import React from 'react'
import case_1 from '../../image/blog/case_1.png';
import case_2 from '../../image/blog/case_2.png';
import case_3 from '../../image/blog/case_3.png';
import { Link } from 'react-router-dom';
import LazyImage from '../UI/LazyImage';


const LinkBlog = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Прокручиваем страницу вверх
    };

    const blogData = [
        {
            image: case_1,
            title: 'Как работает модерация в Авито',
            description: 'Поиск нарушений, помощь пользователям и выявление мошенников.',
            category: 'Разбор кейсов',
            duration: '3 минуты',
        },
        {
            image: case_2,
            title: 'Кейс Авито: Срочный выкуп автомобилей, скупка авто',
            description: 'Николай продвигался на Авито, но не получал ожидаемого результата. Лидов мало, конкуренция высокая, услуги продвижения Авито не работают. Ставим цель – вывести Николая в ТОП-3 для расширения ассортимента его услуг.',
            category: 'Разбор кейсов',
            duration: '12 минут',
        },
        {
            image: case_3,
            title: 'Как разместить объявление на Авито с первого раза   ',
            description: 'Рассказываем, почему объявление могут отклонить или заблокировать и как не допустить этого.',
            category: 'Разбор кейсов',
            duration: '3 минуты',
        },
    ];

    return (
        <div className='rounded-[40px] max-w-[120rem] mx-[2rem] lg:mx-[0rem] 2xl:mx-auto h-auto pt-20 pb-0'>
            <h3 className='h3-link text-[1.6rem] sm:text-[2rem] lg:text-[3rem] 2xl:text-[3.8rem] font-[600] px-[2rem] pb-[2rem] lg:px-[4rem] sm:pb-[3rem]'>
                еще больше фишек вы узнаете в нашем блоге
            </h3>

            {/* Cases */}
            <div className='mb-[1rem] max-w-[120rem] mx-auto rounded-[40px] h-[auto] py-[4rem] px-[2rem] sm:px-[10rem] grid gap-16 gr md:grid-cols-2 xl:grid-cols-3 xl:gap-10 grid-rows-auto '>

                {blogData.map((item, index) => (
                    <div key={index} className='mx-auto'>
                        <LazyImage className='w-[22rem] rounded-[1rem]' src={item.image} alt="Image" />
                        <div className='flex p-blog-time space-x-9 py-[2rem]' style={{ fontSize: '1.5rem' }}>
                            <p>{item.category}</p>
                            <div className="dot"></div>
                            <p>{item.duration}</p>
                        </div>
                        <h3 className='h3-blog'>{item.title}</h3>
                        <p className='p-text-blog'>{item.description}</p>
                    </div>
                ))}

            </div>

            <Link
                to="./Cases"
                onClick={scrollToTop}
                className='btn-calc' style={{ width: 'clamp(20rem 5vw 35rem)', height: 'auto', paddingTop: '1.2rem', paddingBottom: '1.2rem', margin: '0 auto', display: 'block', fontSize: 'clamp(18px, 1.9vw, 24px)' }}
            >
                Читать блог
            </Link>


        </div>
    )
}

export default LinkBlog
