import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../Home/Header'
import LazyLoaded from '../../UI/LazyLoaded';
import axios from 'axios';
import PersonalData from '../../Home/PersonalData';
import decor from '../../../image/decor.png';
// Картинка блога основная
import case_1 from '../../../image/blog/case_1.png';
import case_2 from '../../../image/blog/case_2.png';
import case_3 from '../../../image/blog/case_3.png';
import case_4 from '../../../image/blog/case_4.png';
import case_5 from '../../../image/blog/case_5.png';
import case_6 from '../../../image/blog/case_6.png';
// Картинка финансового график блога
import finance_1 from '../../../image/blog/finance_1.png';
import finance_2 from '../../../image/blog/finance_2.png';
import finance_3 from '../../../image/blog/finance_3.png';
import finance_4 from '../../../image/blog/finance_4.png';
import finance_5 from '../../../image/blog/finance_5.png';
import finance_6 from '../../../image/blog/finance_6.png';
// Картинка воронки блога
import funnel_1 from '../../../image/blog/funnel_1.png';
import funnel_2 from '../../../image/blog/funnel_2.png';
import funnel_3 from '../../../image/blog/funnel_3.png';
import funnel_4 from '../../../image/blog/funnel_4.png';
import funnel_5 from '../../../image/blog/funnel_5.png';
import funnel_6 from '../../../image/blog/funnel_6.png';


const Blogs = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const imageArray = [case_1, case_2, case_3, case_4, case_5, case_6];
  const imageArrayFinance = [finance_1, finance_2, finance_3, finance_4, finance_5, finance_6];
  const imageArrayFunnel = [funnel_1, funnel_2, funnel_3, funnel_4, funnel_5, funnel_6];

  const { title, category, time, image, date, underName, underNameText, question, questionLi1, questionLi2, questionLi3, questionLi4, questionLi5, step, stepText, imgChart2, stepTextAdd1, stepTextAdd2, stepTextAdd3, conclusion, conclusionText, result, resultText, imgResult } = Object.fromEntries(queryParams.entries());
  // и другие параметры

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

  return (
    <div>
      <Header />
      <div className='max-w-[1440px] my-[5rem] sm:my-[10rem] px-[3rem] sm:px-[5rem] lg:px-[10rem] 2xl:px-[5rem] h-auto mx-auto'>
        <h1 className='heading-text'><span>Кейс Авито: {title}</span></h1>
        <div className='flex justify-between mt-[3rem] xl:mt-[7rem]'>
          <p className='p-blog-green'><span>{date}</span></p>
          <span className='p-blog-green flex space-x-5'>
            <p>{category}</p>
            <div className="dot" style={{ marginTop: '5%' }}></div>
            <p>{time}</p>
          </span>
        </div>

        <LazyLoaded src={imageArray[image]} alt={title} className='image-blog' />

        <h2 className='h2-blog-green'>{underName}</h2>
        <p className='p-blog-text'>{underNameText}</p>
        {/* и другие данные */}

        <h2 className='h2-blog-green'>{question}</h2>

        <ul className='pl-[2rem] sm:pl-[6rem] py-[1rem] sm:py-[2rem]' style={{ listStyle: 'disc' }}>
          {
            [questionLi1, questionLi2, questionLi3, questionLi4, questionLi5].filter(item => item !== null && item !== '' && item !== undefined).map((item, index) => (
              <li key={index} className='p-blog-li'>{item}</li>
            ))
          }
        </ul>

        <h2 className='h2-blog-green'>{step}</h2>
        <p className='p-blog-text'>{stepText}</p>

        {imageArrayFinance[imgChart2] !== '' && imageArrayFinance[imgChart2] !== null && imageArrayFinance[imgChart2] !== undefined &&
          <LazyLoaded src={imageArrayFinance[imgChart2]} alt="Финансовый график" className='image-blog-full' />
        }

        <p className='p-blog-text'>{stepTextAdd1}</p>
        <p className='p-blog-text'>{stepTextAdd2}</p>
        <p className='p-blog-text'>{stepTextAdd3}</p>

        <h2 className='h2-blog-green'>{conclusion}</h2>
        <p className='p-blog-text'>{conclusionText}</p>

        <h2 className='h2-blog-green'>{result}</h2>
        <p className='p-blog-text'>{resultText}</p>

        {imageArrayFunnel[imgResult] !== '' && imageArrayFunnel[imgResult] !== null && imageArrayFunnel[imgResult] !== undefined &&
          <LazyLoaded src={imageArrayFunnel[imgResult]} alt="Воронка продаж" className='image-blog-full' />
        }
        <h2 className='h2-blog'>Заказывая услуги Авитолога в компании Ivan Korn, вы получите результат прописанный в договоре, а если возникнут вопросы, мы вернем деньги.
          Хотите повысить эффективность вашего присутствия на Авито? Обращайтесь к нам прямо сейчас!</h2>

        <h3 className='h2-blog-big uppercase'>хочешь также? пиши и мы реализуем!</h3>

        {/* Рассчитать стоимость */}
        <button
          className="btn-calc mx-auto block"
          onClick={openModal}>
          Рассчитать стоимость
        </button>

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
    </div>
  )
}

export default Blogs
