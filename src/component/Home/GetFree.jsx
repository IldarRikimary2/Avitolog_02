import React, { useState } from 'react'
import MyButton from '../UI/Button'
import { Link } from 'react-router-dom';
import PersonalData from './PersonalData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const GetFree = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
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
        <div className='w-full bg-white h-auto mt-36'>
            <h2 className='heading-text py-[3rem] px-[1rem]' style={{ color: 'black' }}>ПОлучите бесплатную консультацию</h2>
            <form onSubmit={handleSubmit} >
                <div className='space-y-10 lg:space-y-0 lg:space-x-10 py-[3rem] max-w-[800px] mx-auto flex justify-center flex-wrap'>

                    {/* Имя */}
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Имя*'
                        className='w-[80%] sm:w-[55%] lg:w-[30%] h-[48px] bg-none border border-gray-400 placeholder-gray-400 oswald px-[2rem] text-[18px] rounded-full'
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
                        className='w-[80%] sm:w-[55%] lg:w-[30%] h-[48px] bg-none border border-gray-400 placeholder-gray-400 oswald px-[2rem] text-[18px] rounded-full'
                        style={{ color: 'gray' }}
                    />

                    {/* Проверка для ботов фейковый input */}
                    <input type="text" name="honeypot" style={{ display: 'none' }} />

                    <div className='flex lg:pt-10 justify-center pb-[2rem] order-1 lg:order-2'>

                        <label className='flex'>
                            <input
                                type="checkbox"
                                name="согласие"
                                checked={formData.agreement}
                                onChange={handleCheckboxChange}
                                className='mr-2 w-[1.5rem] gray'
                                required
                            />
                        </label>
                        <div className='gray font-inter text-[0.95rem] sm:text-[1.2rem] text-gray-300'>
                            {/* Персональные данные */}
                            <PersonalData />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='w-[50%] sm:w-[40%] md:w-[25%] mx-[15%] lg:mx-0 lg:w-[30%] h-[48px] bg-[var(--primary-color)] rounded-full border oswald text-[18px] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] order-2 lg:order-1'
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    )
}

export default GetFree
