import React, { useState, useEffect, useRef } from 'react'
import Header from './Home/Header'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Footer from './Home/Footer';
import axios from 'axios';
import decor from '../image/decor.png';
import PersonalData from './Home/PersonalData';
import plus from '../image/plus.png';
import russia from '../image/map_Russia.png';
import prof_1 from '../image/prof/prof_1.png'
import prof_2 from '../image/prof/prof_2.png'
import prof_3 from '../image/prof/prof_3.png'
import prof_4 from '../image/prof/prof_4.png'
import prof_5 from '../image/prof/prof_5.png'
import prof_6 from '../image/prof/prof_6.png'
import prof_7 from '../image/prof/prof_7.png'
import prof_8 from '../image/prof/prof_8.png'


const Company = () => {
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        avito: '',
        agreement: false,
    });

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Запретить прокрутку фона
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Разрешить прокрутку фона
    };

    const handleModalClick = (e) => {
        // Проверяем, был ли клик на фоне модального окна (или его дочерних элементах)
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        console.log('handleCheckboxChange called with name:', name, 'checked:', checked); // Добавлен console.log
        setFormData({
            ...formData,
            agreement: !formData.agreement,
        });
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        console.log('handleChange called with name:', name, 'value:', value, 'type:', type);
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? e.target.checked : value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        let hasErrors = false;

        // Валидация имени
        if (!formData.name) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Имя обязательно',
            }));
            hasErrors = true;
        }

        // Валидация телефона
        if (!formData.phone) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: 'Телефон обязателен',
            }));
            hasErrors = true;
        }

        // Валидация на фейк
        if (formData.honeypot !== undefined && formData.honeypot !== null && formData.honeypot !== '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                honeypot: 'avito обязателен',
            }));
            hasErrors = true;
        }


        if (hasErrors) {
            return;
        }

        try {
            // Отправка данных на ваш PHP-скрипт
            const response = await axios.post('//avitolog-ik.ru/backend/modal_crm.php', formData);

            // Обработка ответа, если необходимо
            console.log('Успешно отправлено!', response.data);

            // Закрыть модальное окно после успешной отправки
            closeModal();

            // Перенаправление пользователя на страницу "Thanks"
            navigate('/Thanks');

            window.scrollTo(0, 0);

        } catch (error) {
            // Обработка ошибок при отправке данных
            console.error('Произошла ошибка:', error);
        }

    };

    const slides = [
        { imageUrl: prof_1, name: 'Иван Корниенко', professional: 'Основатель' },
        { imageUrl: prof_2, name: 'Кирилл Худолей', professional: 'Руководитель отдела авитологов' },
        { imageUrl: prof_3, name: 'Владимир Каменский', professional: 'Ведущий аналитик' },
        { imageUrl: prof_4, name: 'Даниил Коваленко', professional: 'Отдел Маркетплейсов' },
        { imageUrl: prof_5, name: 'Анна Мальцева', professional: 'Руководитель отдела дизайна' },
        { imageUrl: prof_6, name: 'Андрей Семанин', professional: 'Авитолог' },
        { imageUrl: prof_7, name: 'Ильдар Камалов', professional: 'Разработчик сайтов' },
        { imageUrl: prof_8, name: 'Дарья Сочилкина', professional: 'Копирайтер и SEO специалист' },
        // Добавьте больше слайдов по мере необходимости
    ];
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    //     }, 5000); // Измените интервал по вашему желанию

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentIndexRef = useRef(currentIndex);

    const infiniteSlides = slides.concat(slides).concat(slides); // Генерируем бесконечные слайды

    useEffect(() => {
        currentIndexRef.current = currentIndex;
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Измените интервал по вашему желанию

        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <div className="max-auto max-w-[160rem] mx-auto h-full pb-[14rem] pt-[6rem] md:pt-[16rem] overflow-hidden relative">
            <Header />
            <div className='mx-auto max-w-[1440px] pl-[5rem] md:pl-[10rem] 2xl:pl-0'>
                <h1 className='h1-about-company sm:px-0 w-full' style={{ float: 'left', fontWeight: '400' }}>о компании</h1>
                <div className=' max-w-[700px] pr-[2rem]'>
                    <h2 className='h2-about-company pt-[3rem] sm:pt-[7rem] md:pt-[10rem]'>Развиваем бизнес. Меняем подход к Авито.</h2>
                    <p className='p-about-company pt-[1.5rem] '>Мы рады видеть вас на нашем сайте. Скорее всего, вам небезразличны вопросы качественного продвижения своего бизнеса, а это значит – нам есть, о чём поговорить.</p>
                </div>

                <div className='w-full relative'>
                    {/* Plus */}
                    <div className='pt-[3rem] md:pt-[7rem]'>
                        {/* 1 */}
                        <div className='flex pt-[3rem] pr-[3rem]'>
                            <img className='hidden sm:block icon-problem mr-[2rem] mt-[1rem] sm:mr-[4rem]' src={plus} alt="Plus" />
                            <div className='max-w-[460px]'>
                                <h3 className='h3-about-company w-full'>Развитие нельзя ограничивать каким-то одним направлением.</h3>
                                <p className='p-about-company-plus pt-[1rem]'>Каждый онлайн-портал носитель своей целевой аудитории, к которой нужен свой подход. В Авито 61 000 000 пользователей, и мы знаем, какой товар они ищут, а на каких услугах чаще всего “обжигались”.</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex pt-[3rem] pr-[3rem]'>
                            <img className='hidden sm:block icon-problem mr-[2rem] mt-[1rem] sm:mr-[4rem]' src={plus} alt="Plus" />
                            <div className='max-w-[460px]'>
                                <h3 className='h3-about-company w-full'>Цель продвижения не должна заключаться в трафике.</h3>
                                <p className='p-about-company-plus pt-[1rem]'>Цель продвижения не должна заключаться в трафике.Цель агентства Ivan Korn  — клиенты, а не пустая лидогенерация из бесконечного потока сообщений, не приводящая к продажам.</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex pt-[3rem] pr-[3rem]'>
                            <img className='hidden sm:block icon-problem mr-[2rem] mt-[1rem] sm:mr-[4rem]' src={plus} alt="Plus" />
                            <div className='max-w-[460px]'>
                                <h3 className='h3-about-company w-full'>Большинство предпринимателей продвигаются “сарафанным радио”. Почему это работает?</h3>
                                <p className='p-about-company-plus pt-[1rem]'>Потому что люди верят отзывам, примерам, картинкам. Представьте, что “Интернет” — это ваша соседка с первого этажа. Она обо всех всё знает. Продвижение в интернете происходит через неё — тоже самое “сарафанное радио”, вам не кажется? Существенная разница в оффлайн и онлайн продвижении заключается в инструментах. Посредством таргетинга, парсинга, SEO в ваш бизнес приходит не просто чья-то знакомая, а именно ВАШ клиент, который так долго вас искал! Знаком ли этот клиент с вашей соседкой? Не факт. Пользуется ли он интернетом? 100%!</p>
                            </div>
                        </div>
                    </div>
                    {/* Image Russia */}
                    <div className='justify-center flex 2xl:inline-block owerflow-hidden'>
                        <img src={russia} className='absolute min-w-[670px] lg:max-w-[1000px] h-auto top-[-10rem] sm:top-[-6rem] left-[-4rem] sm:left-[0rem] lg:left-[43%] z-[-1]' alt="Map Russia" />
                        {/* Смотерть больше на авито */}
                    </div>
                </div>
            </div>

            {/* float:right; */}
            <div className='w-full h-[100px] md:h-[300px] hidden md:block'>
                <div className='float-right pb-[9rem] px-[2rem] md:pr-[10rem]'>
                    <h3 className='h2-about-company pt-[10rem] '>Мы стремимся помогать бизнесу получать<br /> стабильный поток клиентов.</h3>
                    <p className='p-about-company pt-[1.5rem] '>Мы – это команда сертифицированных авитологов и digital-специалистов.</p>
                </div>
            </div>

            {/* Показатели */}
            <div className='w-full mx-auto mt-[5rem] sm:mt-[10rem]'>
                <div className='grid grid-cols-3 mx-auto max-w-[1440px] space-y-10 sm:space-y-0 flex-wrap'>
                    {/* 1 */}
                    <div className='col-span-3 sm:col-span-1 max-w-[150px] md:max-w-[200px] mx-auto'>
                        <h4 className='h2-about-company text-center'>87%</h4>
                        <p className='p-about-company mt-[1rem] text-center'>
                            Предпринимателей остаются работать с нашей командой
                        </p>
                    </div>
                    {/* 2 */}
                    <div className='col-span-3 sm:col-span-1 max-w-[150px] md:max-w-[200px] mx-auto'>
                        <h4 className='h2-about-company text-center'>5 лет</h4>
                        <p className='p-about-company mt-[1rem] text-center'>
                            Из 16 лет истории Авито, мы участвуем в оптимизации сервиса и помогаем его использовать бизнесу
                        </p>
                    </div>
                    {/* 3 */}
                    <div className='col-span-3 sm:col-span-1 max-w-[150px] md:max-w-[200px] mx-auto'>
                        <h4 className='h2-about-company text-center'>1,3 млрд ₽</h4>
                        <p className='p-about-company mt-[1rem] text-center'>
                            Заработали клиенты, благодаря нашему подходу
                        </p>
                    </div>
                </div>
            </div>

            {/* Над вашим проектом будут трудиться специалисты в разных отраслях */}
            <div>
                <h2 className='h2-about-company text-center px-[3rem] lg:px-0 pt-[8rem]'>Над вашим проектом будут трудиться специалисты в разных отраслях</h2>
                <div className="slider-container mt-12">
                    <div className="slider flex relative cursor-pointer ">
                        {infiniteSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentIndex ? 'active' : ''} slide-black mx-[2rem]`}
                            >
                                <img src={slide.imageUrl} alt={`Изображение ${index + 1}`} />
                                <div className='absolute bottom-[0] p-[2rem]'>
                                    <p className='p-about-company-name'>{slide.name}</p>
                                    <p className='p-about-company-prof'>{slide.professional}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h2 className='p-get mt-[3rem] md:mt-[5rem] px-[2rem]'>Оставьте заявку и получите подробный расчет стоимости</h2>
                <div className="flex justify-center space-x-20 mt-[2rem] lg:mt-12">

                    {/* Рассчитать стоимость */}

                    <button
                        className="btn-calc "
                        onClick={openModal}>
                        Рассчитать стоимость
                    </button>

                    {/* Читать блог */}
                    <button
                        className="btn-calc "
                        onClick={openModal}>
                        Аудит профиля
                    </button>

                </div>
            </div>
            {/* Модальное окно */}
            {isModalOpen && (
                <>
                    {/* Затемнение заднего интерфейса */}
                    <div className="overlay-dark" onClick={closeModal} />
                    {/* Модальное окно */}
                    <div className="modal-container" onClick={handleModalClick}>
                        <div className="close-icon" onClick={closeModal}>
                            <span className="cross text-gray-400">✕</span>
                        </div>
                        <div className='relative rounded-[0.4rem] mt-[5.6rem] mv-[1rem] sm:mb-[2rem] mx-auto max-w-[40.4rem] h-[9rem] sm:h-[11.7rem] bg-[var(--primary-color)] overflow-hidden'>
                            <img className='absolute top-[-14rem] left-[-14rem] w-[39rem] h-[39rem] ' src={decor} alt="decoration" />
                            <img className='absolute top-[-9rem] left-[22rem]' src={decor} alt="decoration" />
                            <h2 className='uppercase oswald font-[600] text-[1.9rem] md:text-[2.12rem] text-[var(--text-color)] text-center pt-[3rem] md:pt-[6rem]'>
                                Оставьте заявку
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} >
                            {/* Имя */}
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Имя*'
                                className='input-transform-gray'
                                style={{ color: 'gray' }}
                            />

                            {/* Телефон */}
                            <input
                                required
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Телефон*'
                                className='input-transform-gray'
                                style={{ color: 'gray' }}
                            />

                            {/* E-mail */}
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='E-mail'
                                className='input-transform-gray'
                                style={{ color: 'gray' }}
                            />

                            {/* Avito */}
                            <input
                                type="url"
                                name="avito"
                                value={formData.avito}
                                onChange={handleChange}
                                placeholder='Ссылка на авито'
                                className='input-transform-gray'
                                style={{ color: 'gray' }}
                            />

                            {/* Проверка для ботов фейковый input */}
                            <input type="text" name="honeypot" style={{ display: 'none' }} />

                            <div className='flex mt-[3.8rem]'>

                                <label className='mt-[0.2rem]'>
                                    <input
                                        type="checkbox"
                                        name="согласие"
                                        checked={formData.agreement}
                                        onChange={handleCheckboxChange}
                                        className='mr-2 w-[2rem] h-[1.5rem]'
                                        required
                                    />
                                </label>
                                <div className='font-inter text-[0.9rem] md:text-[1.2rem] text-[#909090]'>
                                    {/* Персональные данные */}
                                    <PersonalData />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-[var(--primary-color)] text-[1.3rem] rounded-[40px] h-[4rem] w-[19rem] mt-[4rem] mx-auto block font-[600] oswald hover:border hover:bg-transparent hover:text-white"
                            >
                                Отправить
                            </button>

                        </form>
                    </div>
                </>
            )
            }
        </div >
    )
}

export default Company
