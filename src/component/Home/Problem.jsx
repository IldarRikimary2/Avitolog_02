import React from 'react'
import plus from '../../image/plus.png';

const Problem = () => {
    return (
        <div className='max-w-[120rem] mx-auto '>
            <div className="moving-text-container">
                <div className='bg-[var(--primary-color)] '>
                    <div className="moving-text flex px-[2rem] ">
                        <h2 className='heading-text ' style={{ color: 'var(--text-color)' }}>видишь свою проблему? мы решим её!</h2>
                        {/* <div className="dot_big"></div> */}
                        <h2 className='heading-text ml-8' style={{ color: 'var(--text-color)' }}>видишь свою проблему? мы решим её!</h2>
                        <h2 className='heading-text ml-8' style={{ color: 'var(--text-color)' }}>видишь свою проблему? мы решим её!</h2>
                        <h2 className='heading-text ml-8' style={{ color: 'var(--text-color)' }}>видишь свою проблему? мы решим её!</h2>
                        <h2 className='heading-text ml-8' style={{ color: 'var(--text-color)' }}>видишь свою проблему? мы решим её!</h2>
                        <h2 className='heading-text ml-8' style={{ color: 'var(--text-color)' }}>видишь свою проблему? мы решим её!</h2>
                    </div>
                </div>
            </div>
            <div className='bg-none mx-auto h-auto lg:bg-[var(--background-color)] mt-[2rem] max-w-[70rem] 2xl:max-w-[80rem] rounded-[40px] md:p-[5rem]
            gap-0 sm:gap-[9rem] grid-cols-2 grid lg:grid-cols-3 md:gap-8 2xl:gap-14 grid-rows-auto'>
                {/* 1 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Хотите новых клиентов, но сомневаетесь в площадке Avito?</h3>
                        <p className='p-problem w-full'>Проведем аналитику и поймем сколько Ваших клиентов на площадке.</p>
                    </div>
                </div>

                {/* 2 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Мало заявок с уже существующих объявлений?</h3>
                        <p className='p-problem w-full'>Выявим вашу ЦА, создадим оффер и доведем до максимального результата.</p>
                    </div>
                </div>

                {/* 3 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Конкуренты выше в выдаче и забирают горячих клиентов?</h3>
                        <p className='p-problem w-full'>Разработаем и осуществим стратегию с размещением по времени.</p>
                    </div>
                </div>

                {/* 4 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Не знаете какой бюджет нужен на рекламу?</h3>
                        <p className='p-problem w-full'>Разберем ваши процессы на атомы, составим декомпозицию продаж.</p>
                    </div>
                </div>

                {/* 5 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Оплачиваете услуги продвижения, но нет результата?</h3>
                        <p className='p-problem w-full'>Выявим причину и оптимизируем траты. Не сливайте бюджет – обращайтесь к команде профессионалов.</p>
                    </div>
                </div>

                {/* 6 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Ваше предложение блокирует Авито, а конкурентов нет?</h3>
                        <p className='p-problem w-full'>Найдем решение этой проблемы, даем гарантию на случай блокировок.</p>
                    </div>
                </div>

                {/* 7 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Большой штат и не знаете, как все настроить?</h3>
                        <p className='p-problem w-full'>Точечно распределим объявления на каждого сотрудника. Подключим вашу CRM к Авито.</p>
                    </div>
                </div>

                {/* 8 */}
                <div className='pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto flex'>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Нет времени настраивать выкладку объявлений?</h3>
                        <p className='p-problem w-full'>При помощи собственного софта все публикуется по расписанию. Время – деньги, передайте это профессионалам.</p>
                    </div>
                </div>

                {/* 9 */}
                <div className='hidden lg:flex pb-[14rem] sm:pb-0 w-[14rem] sm:w-[18rem] lg:w-[18rem] xl:w-[23rem] h-[10rem] md:h-[15rem] m-auto '>
                    <img className='icon-problem' src={plus} alt="Plus" />

                    <div className='ml-[20px]'>
                        <h3 className='h3-problem w-full'>Получаете много нецелевых звонков с Авито?</h3>
                        <p className='p-problem w-full'>Изучим все типажи Вашей ЦА, настроим предложение под их поведения.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Problem
