import React, { useState, useEffect } from 'react'
import axios from 'axios';
import decor from '../../image/decor.png';
import back from '../../image/back.png';
import next from '../../image/next.png';
import next_white from '../../image/next_white.png';
import PersonalData from './PersonalData';
import MyButton from '../UI/Button';
import model from '../../image/model.png'

const Test = ({ onOpen }) => {
    const [step, setStep] = useState(1); //1
    const progressBarSteps = [2, 25, 50, 75, 99, 100]; // Шаги прогресса в процентах
    const stepHeadings = {
        1: 'чем вы занимаетесь?',
        2: 'Сколько уникальных позиций в Вашем каталоге (услуг/товаров)?',
        3: 'Какой месячный рекламный бюджет Вы готовы выделить на продвижение?',
        4: 'Когда готовы начать продвижение?',
    }

    const [isModalOpen, setIsModalOpen] = useState(onOpen);
    const [text, setText] = useState('');
    // const [timeLeft, setTimeLeft] = useState(60);
    const maxLength = 160;

    const handleTextChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= maxLength) {
            setSelectedAnswers({
                ...selectedAnswers,
                step1Answer: inputValue,
            });
            setText(inputValue);
        }
    };

    const handleStepChange = () => {
        setStep(step + 1);
    };

    const handleDownStepChange = () => {
        setStep(step - 1);
    };

    const items2 = [
        { text: '1 - 5 позиций' },
        { text: '11 - 20 позиций' },
        { text: '6 - 10 позиций' },
        { text: '20 позиций' },
    ];

    const items3 = [
        { text: 'от 20 до 50 тыс. рублей' },
        { text: 'от 50 до 90 тыс. рублей' },
        { text: 'от 90 тыс. рублей и более' },
        { text: 'Нет ограничений' },
        { text: 'Другое...' },
    ];

    const items4 = [
        { text: 'Еще вчера' },
        { text: 'В течение этой недели' },
        { text: 'Следующий месяц' },
        { text: 'Пока еще думаю' },
    ];



    const [selectedAnswers, setSelectedAnswers] = useState({
        step1Answer: null,
        step2Answer: null,
        step3Answer: null,
        step4Answer: null,
        step5Answer: null,
    });

    // useEffect(() => {
    //     console.log('Selected Answer Step 1:', selectedAnswers.step1Answer);
    //     console.log('Selected Answer Step 2:', selectedAnswers.step2Answer);
    //     console.log('Selected Answer Step 3:', selectedAnswers.step3Answer);
    //     console.log('Selected Answer Step 4:', selectedAnswers.step4Answer);
    //     console.log('Selected Answer Step 5:', selectedAnswers.step5Answer);
    //     console.log('');
    // }, [selectedAnswers]);

    const handleRoundedCSS2 = (index) => {
        setRounded(index)
        setSelectedAnswers({
            ...selectedAnswers,
            step2Answer: items2[index].text,
        });
    }
    const handleRoundedCSS3 = (index) => {
        setRounded(index)
        setSelectedAnswers({
            ...selectedAnswers,
            step3Answer: items3[index].text,
        });
    }
    const handleRoundedCSS4 = (index) => {
        setRounded(index)
        setSelectedAnswers({
            ...selectedAnswers,
            step4Answer: items4[index].text,
        });
    }

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Разрешить прокрутку фона
    };

    const handleModalClick = (e) => {
        // Проверяем, был ли клик на фоне модального окна (или его дочерних элементах)
        if (e.target === e.currentTarget && !e.target.querySelector('input')) {
            closeModal();
        }
    }

    const [rounded, setRounded] = useState(null);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        agreement: false,
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        // console.log('handleCheckboxChange called with name:', name, 'checked:', checked); // Добавлен console.log
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

        if (hasErrors) {
            return;
        }

        const dataToSend = {
            step1Answer: selectedAnswers.step1Answer,
            step2Answer: selectedAnswers.step2Answer,
            step3Answer: selectedAnswers.step3Answer,
            step4Answer: selectedAnswers.step4Answer,
            step5Answer: formData,
        };
        // console.log(dataToSend)

        try {
            // Отправка данных на ваш PHP-скрипт
            // const response = await axios.post('//127.0.0.1/backend/modal_crm.php', dataToSend);
            const response = await axios.post('//avitolog-ik.ru/backend/modal_crm.php', dataToSend);

            // Обработка ответа, если необходимо
            console.log('Успешно отправлено!', response.data);

            handleStepChange()

            setFormData({
                name: '',
                phone: '',
                email: '',
                agreement: false,
            });

            // Очищаем опросник 
            setSelectedAnswers({
                step1Answer: null,
                step2Answer: null,
                step3Answer: null,
                step4Answer: null,
                step5Answer: null,
            })

        } catch (error) {
            // Обработка ошибок при отправке данных
            console.error('Произошла ошибка:', error);
        }
    };

    return (
        <div>
            {/* Модальное окно */}
            {isModalOpen && (
                <>
                    {/* Затемнение заднего интерфейса */}
                    <div className="overlay-dark" onClick={closeModal} />
                    {/* Модальное окно */}
                    <div className="modal-container-test relative" onClick={handleModalClick}>
                        <div className="close-icon" onClick={closeModal}>
                            <span className="cross text-gray-400">✕</span>
                        </div>
                        {step === 1 &&
                            <p className='p-test-green pt-[1.6rem] sm:pt-0 pb-[2rem]' style={{ fontWeight: '300' }}>Заполните форму и получите точный расчет стоимости рекламной кампании на авито</p>
                        }

                        {step >= 2 &&
                            <div className='space-y-[-9px] mt-[3rem]'>
                                <p
                                    className=' text-[var(--primary-color)] oswald font-[300] text-[1.5rem]'

                                    style={{ marginLeft: `${progressBarSteps[step - 1] - 1.5}%` }}
                                >
                                    {progressBarSteps[step - 1]}%
                                </p>
                                <p
                                    className=' text-[var(--primary-color)] oswald font-[300] text-[1.5rem]'
                                    style={{ marginLeft: `${progressBarSteps[step - 1] - 0.5}%` }}
                                >
                                    |
                                </p>
                            </div>
                        }

                        <div className="mb-6 h-3 w-full bg-neutral-200 dark:bg-neutral-600 rounded-full">
                            <div className="h-3 bg-[var(--primary-color)] rounded-full shadow-test transition-all" style={{ width: `${progressBarSteps[step - 1]}%` }}></div>
                        </div>

                        {
                            step < 5 &&
                            <h2 className='h2-blog-green uppercase'>Вопрос {step}</h2>
                        }
                        <h2 className='h2-blog uppercase mb-[2rem]' style={{ textAlign: 'left', fontWeight: '300', marginLeft: '0' }}>{stepHeadings[step]}</h2>


                        {
                            step === 1 &&
                            <div className='relative mb-[2rem]'>
                                <textarea
                                    value={text}
                                    onChange={handleTextChange}
                                    className='textarea-test p-test'
                                    placeholder="Недвижимость, розничная торговля, услуги, другое..."
                                    rows="4"
                                    cols="50"
                                />
                                <div className='absolute bottom-5 right-5 p-test'>
                                    {text.length}/{maxLength}
                                </div>
                            </div>
                        }
                        {
                            step === 2 &&
                            <div className='mb-10 grid grid-cols-2'>
                                {items2.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`div-test ${rounded === index ? 'selected' : ''}`}
                                        onClick={() => handleRoundedCSS2(index)}
                                    >
                                        <div
                                            className={`hidden sm:inline-block rounded-circle ${rounded === index ? 'rounded-circle-active' : ''}`}
                                        />
                                        <p className="p-text-white my-auto">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        }
                        {
                            step === 3 &&
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-wrap mb-10'>

                                {items3.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`div-test ${rounded === index ? 'selected' : ''}`}
                                        onClick={() => handleRoundedCSS3(index)}
                                    >
                                        <div className='hidden md:inline-block w-[50px] h-[50px] pt-[2.5rem] lg:pt-[2rem]'>
                                            <div className={`rounded-circle ${rounded === index ? 'rounded-circle-active' : ''}`} />
                                        </div>

                                        {index === 4 ?
                                            <input
                                                type="text"
                                                placeholder='Другое...'
                                                className='input-test'
                                            />
                                            :
                                            <p className="p-text-white my-auto">{item.text}</p>
                                        }
                                    </div>
                                ))}
                            </div>
                        }
                        {
                            step === 4 &&
                            <div className='mb-10 grid grid-cols-2'>
                                {items4.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`div-test ${rounded === index ? 'selected' : ''}`}
                                        onClick={() => handleRoundedCSS4(index)}
                                    >
                                        <div
                                            className={`hidden md:inline-block rounded-circle ${rounded === index ? 'rounded-circle-active' : ''}`}
                                        />
                                        <p className="p-text-white my-auto">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                        }
                        {
                            step < 5 && <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600 " />}
                        <div className='flex justify-between'>
                            {
                                step < 5 &&
                                <>
                                    <p className='p-blog-text uppercase' style={{ textAlign: 'left', fontWeight: '300', marginLeft: '0' }}>Вопрос {step} из 4</p>
                                    <div className='flex w-[130px] sm:w-[220px] lg:w-[240px] space-x-3 sm:space-x-5'>
                                        {step > 1 &&
                                            <MyButton
                                                className='w-[60px] h-auto md:w-[140px] transition duration-300 hover:filter hover:brightness-0 hover:grayscale-0'
                                                onClick={handleDownStepChange}
                                            >
                                                <img src={back} alt="Стрелка назад" />
                                            </MyButton>
                                        }
                                        <MyButton
                                            className='btn-calc-test p-[2rem] flex'
                                            onClick={handleStepChange}
                                        >
                                            Далее
                                            {/* <img src={next} className='hidden sm:block ml-0 sm:ml-[1rem] mt-[0.4rem]' alt="Стрелка вперёд" /> */}
                                            <img src={next_white} className='hidden sm:block ml-0 sm:ml-[1rem] mt-[0.4rem]' alt="Стрелка вперёд" />
                                        </MyButton>
                                    </div>
                                </>
                            }
                        </div>
                        {
                            step === 5 &&
                            <div className='flex h-[400px]'>
                                {/* Text */}
                                <div className='hidden md:inline-block w-[40%] lg:w-[55%]'>
                                    <h2 className='h2-test-green uppercase pb-[2.5rem]'>Остался последний шаг!</h2>
                                    <div className='mr-[5rem]'>
                                        <p className='p-test-white pb-[2rem]'>Спасибо за уделенное вами время!</p>
                                        <p className='p-test-white'>Мы отправим вам предварительный расчет сметы за проект, а также закрепим за вашим номером индивидуальную скидку. Это абсолютно бесплатно и ни к чему не обязывает!</p>
                                    </div>
                                </div>
                                {/* Line */}
                                <div className="hidden md:inline-block mb-6 h-[100%] w-1 bg-gray-200 dark:bg-gray-600 " />
                                {/* Form */}
                                <div className='w-[340px] mx-auto mt-[5%]'>
                                    <form onSubmit={handleSubmit} >
                                        <p className='inline-block md:hidden p-test-white pb-10'>Мы отправим вам предварительный расчет сметы за проект, а также закрепим за вашим номером индивидуальную скидку.</p>
                                        {/* E-mail */}
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='E-mail'
                                            className='input-transform-test'
                                            style={{ color: 'gray' }}
                                        />

                                        {/* Имя */}
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='Имя'
                                            className='input-transform-test'
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
                                            className='input-transform-test'
                                            style={{ color: 'gray' }}
                                        />

                                        {/* Проверка для ботов фейковый input */}
                                        <input type="text" name="honeypot" style={{ display: 'none' }} />

                                        <div className='flex mt-[1.8rem]'>

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
                                            <div className='font-inter mt-[0.3rem] text-gray-400 text-[0.76rem] sm:text-[0.9rem]'>
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
                            </div>
                        }

                        {
                            step === 6 &&
                            <div>
                                <h2 className='h2-test-green-thanks uppercase pb-[2.5rem]'>спасибо за уделенное вами время</h2>
                                <p className='p-test-white pb-[20%] text-center'>Наш оператор свяжется с вами в течение 10 минут</p>

                                <img className='absolute bottom-0 left-[18%] w-[60%]' src={model} alt="Изображение 3 модельки" />
                            </div>
                        }

                    </div >
                </>
            )}
        </div >
    )
}

export default Test
