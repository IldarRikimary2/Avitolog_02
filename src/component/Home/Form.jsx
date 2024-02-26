import React, { useState } from 'react';
import LazyImage from '../UI/LazyImage';
import image_form from '../../image/image_form.png';
import MyButton from '../UI/Button';
import PersonalData from './PersonalData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        avito: '',
        agreement: false,
    });

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

            setFormData({
                name: '',
                phone: '',
                email: '',
                avito: '',
                agreement: false,
            });

            navigate('/Thanks');

            window.scrollTo(0, 0);
        } catch (error) {
            // Обработка ошибок при отправке данных
            console.error('Произошла ошибка:', error);
        }
    };

    return (
        <div className='max-w-[60rem] h-[42rem] rounded-[50px] p-[3rem] sm:p-0 flex justify-center  2xl:max-w-[90rem]  md:h-[40rem] mx-[1.4rem] sm:mx-[5rem] md:mx-auto bg-white mt-[12rem] relative' style={{ zIndex: 1 }}>
            {/* Form */}
            <div className='my-auto w-[33rem] mx-auto 2xl:mx-0 2xl:mb-24 2xl:ml-48'>
                <h2 className='uppercase oswald font-semibold text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] my-10 text-center'>Запускаем <span style={{ color: 'black', textDecoration: 'line-through black' }} >объявление</span> <span>трансформациию</span></h2>
                <form onSubmit={handleSubmit} >
                    {/* Имя */}
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Имя*'
                        className='input-transform'
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
                        className='input-transform'
                        style={{ color: 'gray' }}
                    />

                    {/* E-mail */}
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='E-mail'
                        className='input-transform'
                        style={{ color: 'gray' }}
                    />

                    {/* Avito */}
                    <input
                        type="url"
                        name="avito"
                        value={formData.avito}
                        onChange={handleChange}
                        placeholder='Ссылка на авито'
                        className='input-transform'
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
                        <div className='font-inter mt-[0.3rem] text-[0.76rem] sm:text-[0.9rem]'>
                            {/* Персональные данные */}
                            <PersonalData />
                        </div>
                    </div>

                    <MyButton
                        type="submit"
                        className='btn-form'
                        style={{ height: '50px', paddingTop: '1.1rem' }}
                    >
                        Отправить
                    </MyButton>

                </form>

            </div>
            {/* image */}
            {/* Сделать загрузку по спуску */}
            <LazyImage src={image_form} alt="Loaded Image" className='hidden 2xl:inline-block ml-48' />
        </div>
    );
}

export default Form;
