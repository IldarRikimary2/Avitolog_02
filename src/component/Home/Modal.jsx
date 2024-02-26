import React, { useState } from 'react'
import MyButton from '../UI/Button';
import PersonalData from './PersonalData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Modal = ({ onClose, title }) => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        avito: '',
        agreement: false,
    });

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
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

            navigate('/Thanks');
            window.scrollTo(0, 0);

        } catch (error) {
            // Обработка ошибок при отправке данных
            console.error('Произошла ошибка:', error);
        }
    };

    return (
        <>
            {/* Затемнение заднего интерфейса */}
            <div className="overlay-dark" onClick={closeModal} />
            {/*  */}
            <div className='modal-container' onClick={handleModalClick}>
                
                <div className="close-icon" onClick={closeModal}>
                    <span className="cross text-gray-400">✕</span>
                </div>
                <div className=''>
                    <h2 className='uppercase oswald font-[600] text-[1.8rem] md:text-[2.12rem] text-[var(--text-color)] text-center pt-[6rem]'>
                        <span>{title}</span>
                    </h2>
                    <p className='w-[19rem] md:w-[31rem] mx-auto mt-[1.42rem] p-coolback-phone'>Оставьте свои данные и наш менеджер свяжется с вами в течение часа</p>
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
                    {/* Авито */}
                    <input
                        type="url"
                        name="avito"
                        value={formData.avito}
                        onChange={handleChange}
                        placeholder='Ссылка на авито'
                        className='input-transform-gray'
                        style={{ color: 'gray' }}
                    />

                    <label
                        className='flex mt-[3.8rem]'>
                        <input
                            type="checkbox"
                            name="согласие"
                            value="согласен"
                            className='mr-2 w-[1.5rem]'
                            required
                        />
                        <div className='font-inter text-[0.9rem] md:text-[1.2rem] text-[#909090]'>
                            {/* Персональные данные */}
                            <PersonalData />
                        </div>
                    </label>

                    <MyButton
                        type="submit"
                        className="bg-[var(--primary-color)] text-[1.3rem] rounded-[40px] h-[4rem] w-[19rem] mt-[4rem] mx-auto block font-[600] oswald hover:border hover:bg-transparent hover:text-white">
                        Отправить
                    </MyButton>
                </form>
            </div>
        </>
    )
}

export default Modal
