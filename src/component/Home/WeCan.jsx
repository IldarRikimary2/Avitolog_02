import React from 'react'
import decoration from '../../image/decoraion_light_2.png';
import LazyImage from '../UI/LazyImage';


const WeCan = () => {
    return (
        <div className='max-w-[120rem] mx-auto h-[30rem] sm:h-[65rem] mt-32'>
            <h2 className='heading-text px-[4.7rem] mt-40'>Вам может понадобиться <span>- мы умеем!</span></h2>
            <div className='relative mx-auto max-w-[70rem] h-full pr-[2rem]  grid grid-cols-10 grid-rows-3 gap-6'>
                {/* 1 */}
                <div className=' col-span-3 row-span-2'>
                    <div className='grid grid-cols-5 grid-rows-3'>
                        <div className=' col-span-5 row-span-1'></div>
                        <div className=' col-span-5 row-span-1'></div>
                        <div className=' col-span-1 row-span-1'></div>
                        <div className=' col-span-4 '>
                            <h3 className='h3-weCan'>Яндекс.Директ</h3>
                            <p className='text-p-can'>Настройка контекстной рекламы</p>
                        </div>
                    </div>
                </div>
                <div className='  col-span-4 row-span-1'></div>

                {/* 2 */}
                <div className=' col-span-3 row-span-2'>
                    <div className='grid grid-cols-5 grid-rows-3'>
                        <div className=' col-span-4 row-span-2'></div>
                        <div className=' col-span-4 row-span-3'>
                            <h3 className='h3-weCan'>маркетплейсы</h3>
                            <p className='text-p-can'>Создание и ведение товара</p>
                        </div>
                    </div>
                </div>


                {/* Decoration */}
                <LazyImage src={decoration} alt="Decoration" className=' w-full col-span-4 row-span-4' />

                {/* 4 */}
                <div className=' col-span-3 row-span-1'>
                    <div className='grid grid-cols-5 grid-rows-4'>
                        <div className=' col-span-3 row-span-3'></div>
                        <div className=' col-span-2 row-span-2'>
                            <h3 className='h3-weCan'>SEO</h3>
                            <p className='text-p-can'>Продвижение сайтов</p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className=' col-span-3 row-span-1'>
                    <div className='grid grid-cols-5 grid-rows-4'>
                        <div className=' col-span-3 row-span-1'>
                            <h3 className='h3-weCan'>Сайты</h3>
                            <p className='text-p-can'>Разработка и поддержка страницы товара/бизнеса</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeCan