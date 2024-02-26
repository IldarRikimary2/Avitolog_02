import React from 'react'
import vector_1 from '../../../public/Vector1.svg'
import vector_2 from '../../image/Vector2.png'
import vector_end from '../../image/VectorEnd.png'
import ScrollMovingObject from '../UI/ScrollMovingObject'
import ScrollMovingObjectСopy from '../UI/ScrollMovingObjectСopy'

const FiveSteps = () => {
    return (
        <div className='max-w-[120rem] mx-auto h-auto mt-[10rem] lg:mt-[7rem]'>
            <h2 className='heading-text text-center 2xl:text-right lg:pr-[4rem] mb-[4rem] lg:mb-[4rem]'>
                5 шагов <span>успешного проекта</span>
            </h2>
            <div className=' max-w-[120rem] space-y-20 2xl:space-y-0 mx-auto relative px-[2rem] md:px-[10rem] lg:px-[10rem]'>
                {/* 1 */}
                <div className='flex relative'>
                    <div className='mx-auto sm:mx-0 relative w-[27rem] h-auto md:w-[38rem] md:h-[36rem] bg-white shadow-md shadow-white-900 rounded-[1.6rem] px-16 py-12 z-10'>
                        <h3 className='h3-steps'><span>Шаг 1 -</span> анализ</h3>

                        <p className='p-step'>
                            Анализируем ваш бизнес, его процессы и составляем декомпозицию воронки продаж. Изучаем ключевые товары и услуги, проводим анализ конкурентов, изучаем их уникальные предложения, стратегии и методы продвижения.
                        </p>

                        <div className='md:absolute md:bottom-16 pt-[1.25rem]'>
                            <div className='flex'>
                                <p className='p-result'>В результате</p>
                                <div
                                    className='w-[10rem] sm:w-[10rem] md:w-[20rem]'
                                    style={{ background: 'var(--primary-color)', height: '0.1rem', marginTop: '0.8rem', marginLeft: '1.5rem' }}>
                                </div>
                            </div>
                            <p className='p-text-result'>Сформированная структура проекта</p>
                        </div>

                    </div>
                    {/* 1_vector */}

                    {/* <ScrollMovingObjectСopy /> */}
                    <img className='absolute top-[19rem] left-[32rem] z-0 w-[50.8rem] h-[auto] hidden  2xl:block' src={vector_1} alt="Image" />
                </div>
                {/* 2 */}
                <div className='flex relative'>
                    <img className='absolute top-[19rem] left-[24rem] z-0 w-[55.8rem] h-[auto] hidden  2xl:block' src={vector_2} alt="Image" />
                    <div className='mx-auto sm:mx-0 sm:ml-auto w-[27rem] h-auto md:w-[38rem] md:h-[36rem]  bg-white shadow-md shadow-white-900 rounded-[1.6rem] px-16 py-12 z-10'>
                        <h3 className='h3-steps'>
                            <span>Шаг 2 -</span> Маркетинг
                        </h3>

                        <p className='p-step'>
                            Определяем вашу целевую аудиторию и сегментируем ее в зависимости от потребностей и покупательской способности. Разрабатываем контент в А/Б формате, включая тексты, кликабельные креативы, инфографику, и адаптируем его под SEO.
                        </p>

                        <div className='md:absolute md:bottom-16 pt-[1.25rem]'>
                            <div className='flex'>
                                <p className='p-result'>В результате</p>
                                <div
                                    className='w-[10rem] sm:w-[10rem] md:w-[20rem]'
                                    style={{ background: 'var(--primary-color)', height: '0.1rem', marginTop: '0.8rem', marginLeft: '1.5rem' }}>
                                </div>
                            </div>
                            <p className='p-text-result'>Согласованные материалы, готовые к реализации</p>
                        </div>

                    </div>
                </div>
                {/* 3 */}
                <div className='flex relative'>
                    <div className='mx-auto sm:mx-0 w-[27rem] h-auto md:w-[38rem] md:h-[36rem]  bg-white shadow-md shadow-white-900 rounded-[1.6rem] px-16 py-12 z-10'>
                        <h3 className='h3-steps'><span>Шаг 3 - </span>Реализация</h3>

                        <p className='p-step'>
                            Размещаем ваши объявления, создаем упаковку профиля и настраиваем необходимые компоненты на площадке Авито.
                        </p>

                        <div className='md:absolute md:bottom-16 pt-[1.25rem]'>
                            <div className='flex'>
                                <p className='p-result'>В результате</p>
                                <div
                                    className='w-[10rem] sm:w-[10rem] md:w-[20rem]'
                                    style={{ background: 'var(--primary-color)', height: '0.1rem', marginTop: '0.8rem', marginLeft: '1.5rem' }}>
                                </div>
                            </div>
                            <p className='p-text-result'>Вышедшие объявления, упакованный профиль</p>
                        </div>

                    </div>
                    {/* 1_vector */}

                    <img className='absolute top-[19rem] left-[32rem] z-0 w-[50.8rem] h-[auto]  hidden 2xl:block' src={vector_1} alt="Image" />
                </div>
                {/* 4 */}
                <div className='flex relative'>
                    <img className='absolute top-[19rem] left-[24rem] z-0  w-[55.8rem] h-[auto]  hidden 2xl:block' src={vector_2} alt="Image" />

                    <div className='mx-auto sm:mx-0 sm:ml-auto w-[27rem] h-auto md:w-[38rem] md:h-[36rem]  bg-white shadow-md shadow-white-900 rounded-[1.6rem] px-16 py-12 z-10'>
                        <h3 className='h3-steps'>
                            <span>Шаг 4 -</span> Настройка платного продвижения
                        </h3>

                        <p className='p-step'>
                            Оптимизируем бюджет и выбираем самые эффективные объявления для услуг платного продвижения, проводим тесты.
                        </p>

                        <div className='md:absolute md:bottom-16 pt-[1.25rem]'>
                            <div className='flex'>
                                <p className='p-result'>В результате</p>
                                <div
                                    className='w-[10rem] sm:w-[10rem] md:w-[20rem]'
                                    style={{ background: 'var(--primary-color)', height: '0.1rem', marginTop: '0.8rem', marginLeft: '1.5rem' }}>
                                </div>
                            </div>
                            <p className='p-text-result'>Выявление лучших объявлений, настройка платного продвижения, увеличение количества лидов</p>
                        </div>

                    </div>
                </div>
                {/* 5 */}
                <div className='flex relative'>
                    <div className='mx-auto sm:mx-0 w-[27rem] h-auto md:w-[38rem] md:h-[36rem]  bg-white shadow-md shadow-white-900 rounded-[1.6rem] px-16 py-12 z-10'>
                        <h3 className='h3-steps'><span>Шаг 5 -</span> Достижение плана. Отчётность</h3>

                        <p className='p-step'>
                            Контроль показателей аккаунта, достижение поставленных целей в генерации лидов, корректировка стратегии в зависимости от достигнутых результатов. Предоставляем отчетность о проделанной работе.
                        </p>

                        <div className='md:absolute md:bottom-16 pt-[1.25rem]'>
                            <div className='flex'>
                                <p className='p-result'>В результате</p>
                                <div
                                    className='w-[10rem] sm:w-[10rem] md:w-[20rem]'
                                    style={{ background: 'var(--primary-color)', height: '0.1rem', marginTop: '0.8rem', marginLeft: '1.5rem' }}>
                                </div>
                            </div>
                            <p className='p-text-result'>Подведение итогов, поиск новых точек роста</p>
                        </div>

                    </div>
                    {/* 1_vector */}
                    <img className='absolute top-[19rem] left-[32rem] w-[50rem] h-auto  hidden 2xl:block' style={{ zIndex: 0 }} src={vector_end} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default FiveSteps
