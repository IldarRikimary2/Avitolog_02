import React from 'react'
import LazyImage from '../UI/LazyImage';
import inform_1 from '../../image/inf_1.png';
import inform_2 from '../../image/inf_2.png';
import inform_3 from '../../image/inf_3.png';
import inform_4 from '../../image/inf_4.png';


const Achievements = () => {
    return (
        <div className='max-w-[120rem] mx-auto h-auto mt-[7rem] 2xl:mt-[10rem]'>
            {/* information */}
            <h2 className='px-[3rem] clamp-size-h2-garant heading-text '><span className='text-[var(--primary-color)]'>Гарантируем результат в лидах</span> Прописанный в договоре</h2>
            <div className='max-w-[1240px] mx-auto h-auto mt-[7rem] px-0 gap-20 grid grid-cols-4'>
                {/* Information about results */}
                {/* 1 */}
                <div className='mx-auto whitespace-normal col-span-4 md:col-span-2 xl:col-span-1'>

                    <div className='relative'>
                        <div className="shadow md:w-[7rem] md:h-[7rem]"></div>
                        <LazyImage src={inform_1} alt="Icon" className='icon-result' />
                    </div>

                    <div className='white-line'></div>

                    <div className='text-result oswald text-left'>
                        <p>Добиваемся минимальной цены заявки в <span>50 рублей</span></p>
                    </div>

                </div>
                {/* 2 */}
                <div className='mx-auto whitespace-normal col-span-4 md:col-span-2 xl:col-span-1'>
                    <div className='relative'>
                        <div className="shadow md:w-[7rem] md:h-[7rem]"></div>
                        <LazyImage src={inform_2} alt="Icon" className='icon-result' />
                    </div>
                    <div className='white-line'></div>
                    <div className='text-result oswald text-left'>
                        <p><span>3 года</span> успешного опыта, более <span>200 аккаунтов, в 50 нишах</span></p>
                    </div>
                </div>
                {/* 3 */}
                <div className='mx-auto whitespace-normal col-span-4 md:col-span-2 xl:col-span-1'>
                    
                    <div className='relative'>
                        <div className="shadow md:w-[7rem] md:h-[7rem]"></div>
                        <LazyImage src={inform_3} alt="Icon" className='icon-result' />
                    </div>
                    <div className='white-line'></div>
                    <div className='text-result oswald text-left'>
                        <p>Улучаем показатели ежемесячно, <span>87% клиентов</span> остаются с нами на года</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='mx-auto whitespace-normal col-span-4 md:col-span-2 xl:col-span-1'>
                    <div className='relative'>
                        <div className="shadow md:w-[7rem] md:h-[7rem]"></div>
                        <LazyImage src={inform_4} alt="Icon" className='icon-result ' />
                    </div>
                    <div className='white-line'></div>
                    <div className='text-result oswald text-left'>
                        <p><span>0%</span> блокировок, предоставляем отчетность</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
