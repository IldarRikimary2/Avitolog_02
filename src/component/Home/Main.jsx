import React, { useState } from 'react';
import decor from '../../image/decor.png';
import background from '../../image/background.png';
import LazyImage from '../UI/LazyImage';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Header from './Header';
import axios from 'axios';
import PersonalData from './PersonalData';
import { useNavigate } from 'react-router-dom';
import Test from './Test';

const Main = () => {

    const navigate = useNavigate();
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
    }

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

        // // Отправка данных на сервер PHP
        // const response = await fetch('//ba62-93-88-83-147.ngrok-free.app/backend/modal_email.php', {
        //     method: 'POST',
        //     body: JSON.stringify(formData),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // // Вывести полный ответ в консоль
        // console.log('Полный ответ:', response);

        // if (response.ok) {
        //     // Форма успешно отправлена, можно выполнить дополнительные действия
        //     // Например, очистить форму или отобразить сообщение об успехе
        //     console.log('Форма успешно отправлена на почту');
        // } else {
        //     // Обработка ошибки при отправке данных
        //     console.error('Произошла ошибка при отправке данных');
        // }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Отправка данных на сервер PHP
    //     const response = await fetch('//ba62-93-88-83-147.ngrok-free.app/backend/modal_email.php', {
    //         method: 'POST',
    //         body: JSON.stringify(formData),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });

    //     // Вывести полный ответ в консоль
    //     console.log('Полный ответ:', response);

    //     if (response.ok) {
    //         // Форма успешно отправлена, можно выполнить дополнительные действия
    //         // Например, очистить форму или отобразить сообщение об успехе
    //         console.log('Форма успешно отправлена');
    //     } else {
    //         // Обработка ошибки при отправке данных
    //         console.error('Произошла ошибка при отправке данных');
    //     }
    // };

    const menuLinks = [
        { to: "cases", text: "Кейсы" },
        { to: "reviews", text: "Отзывы" },
        { to: "contacts", text: "Контакты" },
    ];

    return (
        <div className="mx-auto max-w-[160rem] h-[100%] pt-[5rem] sm:pt-[15rem] md:pt-[12rem] 2xl:pt-[12rem] px-0 md:px-[3rem] xl:px-[10rem] 2xl:px-0 relative">

            {/* Фон */}
            <LazyImage src={background} alt="Background" className='absolute top-0 left-0 w-full h-2/3 sm:h-full z-[-1]' />

            <Header menuLinks={menuLinks} isBlogPage={true} />

            {/* Main text */}
            <div className=" max-w-[120rem] mx-auto text-white font-sans oswald font-bold mt-[2rem] lg:mt-[0rem] 2xl:mt-[5rem] lg:pl-0  ">
                <div className="flex justify-center">
                    <h1 className='clamp-size-h1 text-center uppercase'>Услуги Авитолога</h1>
                    {/* <LazyImage src={avito} alt="Loaded Image" className='w-[40px] h-[40px] md:w-[80px] md:h-[80px] ml-4 2xl:w-[115px] 2xl:h-[111px] lg:ml-10' /> */}
                </div>
                <h2 className="text-center clamp-size-h2-garan uppercase">
                    с гарантией результата
                </h2>

                <p className='p-two mt-[2rem] px-[2rem]'>
                    Увеличиваем поток заявок на 200-300%
                </p>

                <p className='p-get mt-[12rem] px-[2rem]'>
                    Оставьте заявку и получите подробный расчет стоимости
                </p>

            </div>


            {/* Read and Costs */}
            <div className="flex justify-center space-x-20 mt-[2rem] lg:mt-12">

                {/* Рассчитать стоимость */}

                <button
                    className="btn-calc "
                    onClick={openModal}>
                    Рассчитать стоимость
                </button>

                {/* Читать блог */}
                <ScrollLink
                    to='contacts'
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='btn-blog lg:inline-block hidden cursor-pointer'
                >
                    Бесплатный аудит
                </ScrollLink>
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
            )}
        </div>
    )
}

export default Main;
