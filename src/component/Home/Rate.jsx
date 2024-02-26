import React, { useState } from 'react'
import MyButton from '../UI/Button'
import Modal from './Modal'

const Rate = () => {
  const [showText, setShowText] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('˅');
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
  });

  const openModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: true,
    }));
    document.body.style.overflow = 'hidden'; // Запретить прокрутку фона
  };

  const closeModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: false,
    }));
    document.body.style.overflow = 'auto'; // Разрешить прокрутку фона
  };


  const toggleText = () => {
    setShowText(!showText);
    setArrowDirection(showText ? '˅' : '˄');
  };

  return (
    <div className='max-w-[120rem] h-[auto] mx-auto mt-[10rem]'>
      <h2 className='heading-text px-[3rem]' style={{ color: 'var(--primary-color)' }}>Ты точно найдешь подходящий для себя вариант</h2>
      <div className='flex justify-around flex-wrap space-y-20 sm:space-y-0'>
        {/* 1 */}
        <div>
          <div className='mt-32 block-rate lg:shadow-md'>
            <div className='relative'>
              <h2 className='oswald-semi-white lg:oswald-semi'>тариф “пойдем”</h2>
              <div>
                {/* discount */}
                <p className='discount-rate'>-25%</p>
              </div>
              {/* Цена тарифа */}
              <div className='price-rate-white lg:price-rate'>
                <p className='oswald-semi lg:oswald-semi-white'>от 24 900 ₽ </p>
                <p className='p-last-rate'><s>32 900 ₽ </s></p>
              </div>

              <p className="p-advantages"><span className='text-[var(--primary-color)] lg:text-black'>Тестирование возможностей Авито</span></p>
            </div>

            <ul className={`${showText ? '' : 'hidden lg:inline-block'}  ul-rate`}>
              <li>Консультация</li>
              <li>Базовая аналитика конкурентов</li>
              <li>Размещение <span className='green-text-rate'> до 3 уникальных товаров</span></li>
              <li><span className='green-text-rate'>До 500 объявлений</span></li>
              <li>Создание уникального контента</li>
              <li>Обход блокировок</li>
              <li>SEO для внутренних алгоритмов</li>
              <li>Работа с репутацией аккаунта</li>
              <li>Отчет раз в месяц</li>
              <li>Над проектом работает <span className='green-text-rate'>2 специалиста</span></li>
              <li>Отчет раз в месяц</li>
            </ul>


            <MyButton
              onClick={() => openModal('modal1')}
              className='button-rate-dark lg:button-rate'>
              Выбрать тариф
            </MyButton>

            <p className='text-center lg:hidden oswald text-white lg:text-black text-[1.1rem]'>
              {showText ? 'свернуть' : 'смотреть подробнее'}
            </p>

            <button
              onClick={toggleText}
              className='nextArrow inline-block lg:hidden'
              style={{ margin: '10px auto 0', color: 'var(--text-color)', padding: '0.7rem', background: 'white' }}
            >
              {arrowDirection}

            </button>

            {modals.modal1 &&
              <Modal
                onClose={() => closeModal('modal1')}
                title="Тариф “пойдем” "
              />
            }

          </div>
        </div>


        {/* 2 */}
        <div>
          <div className='mt-32 block-rate-dark lg:shadow-md-dark overflow-hidden relative'>
            <div className='relative'>
              <h2 className='oswald-semi' style={{ color: 'white' }}>тариф “поехали”</h2>
              <div>
                {/* discount */}
                <p className='discount-rate'>-20%</p>
              </div>
              {/* Цена тарифа */}
              <div className='price-rate-white'>
                <p className='oswald-semi'>от 39 900 ₽ </p>
                <p className='p-last-rate'><s>49 900 ₽ </s></p>
              </div>
            </div>

            <p className="p-advantages"><span>Максимум преимуществ для малого бизнеса</span></p>

            <ul className={`${showText ? '' : 'hidden lg:inline-block'}  ul-rate`} style={{ color: 'white' }}>
              <li><span className='green-text-rate'>Гарантия результата</span> в заявках</li>
              <li>Декомпозиция воронки продаж</li>
              <li>Углубленная аналитика конкурентов</li>
              <li><span className='green-text-rate'>До 5 000</span> объявлений</li>
              <li>Сегментация ЦА</li>
              <li>Создание инфографики и уникального контента <span className='green-text-rate'>под каждую ЦА</span></li>
              <li>Над проектом работает <span className='green-text-rate'>4 специалиста</span></li>
              <li>SEO для внутренних алгоритмов</li>
              <li>Работа с репутацией аккаунта</li>
              <li>Еженедельный отчет</li>
              <li>Обход блокировок</li>
            </ul>

            <MyButton
              onClick={() => openModal('modal2')}
              className='button-rate-dark'
            >
              Выбрать тариф
            </MyButton>

            <p className='text-center lg:hidden oswald text-white text-[1.1rem]'>
              {showText ? 'свернуть' : 'смотреть подробнее'}
            </p>

            <button
              onClick={toggleText}
              className='nextArrow inline-block lg:hidden'
              style={{ margin: '10px auto 0', color: 'var(--text-color)', padding: '0.7rem', background: 'white' }}
            >
              {arrowDirection}

            </button>

            {modals.modal2 &&
              <Modal
                isOpen={modals.modal2}
                onClose={() => closeModal('modal2')}
                title="Тариф “поехали”"
              />
            }

            {/* Хит продаж */}

            <div className='bestseller-rate'>
              <p className='p-bestseller-rate'>
                хит продаж
              </p>
            </div>

          </div>
        </div>


        {/* 3 */}
        <div>
          <div className='mt-32 block-rate lg:shadow-md'>
            <div className='relative'>
              <h2 className='oswald-semi-white lg:oswald-semi'>тариф “полетели”</h2>
              <div>
                {/* discount */}
                <p className='discount-rate z-10'>-15%</p>
              </div>
              {/* Цена тарифа */}
              <div className='price-rate-white lg:price-rate'>
                <p className='oswald-semi lg:oswald-semi-white'>от 59 000 ₽ </p>
                <p className='p-last-rate'><s>68 990 ₽  </s></p>
              </div>
            </div>
            <p className="p-advantages"><span className='text-[var(--primary-color)] lg:text-black'>Сложные задачи, обеспечение эффективного роста</span></p>

            <ul className={`${showText ? '' : 'hidden lg:inline-block'}  ul-rate`}>
              <li><span className='green-text-rate'>Гарантия результата</span> в заявках</li>
              <li>Углубленная аналитика конкурентов</li>
              <li><span className='green-text-rate'>До 50 000 объявлений</span></li>
              <li>Дорожная карта проекта</li>
              <li>Декомпозиция воронки продаж</li>
              <li>Полная маркетинговая упаковка</li>
              <li>Создание инфографики и контента  под каждую ЦА</li>
              <li>Актуализация ассортимента исходя из потребностей</li>
              <li>Стратегия платного продвижения</li>
              <li><span className='green-text-rate'>Обучение отдела продаж</span> работе с Авито</li>
              <li><span className='green-text-rate'>SEO оптимизация</span> под Авито и поисковик Яндекса</li>
            </ul>

            <MyButton
              onClick={() => openModal('modal3')}
              className='button-rate-dark lg:button-rate'>
              Выбрать тариф
            </MyButton>

            <p className='text-center lg:hidden oswald text-white lg:text-black text-[1.1rem]'>
              {showText ? 'свернуть' : 'смотреть подробнее'}
            </p>

            <button
              onClick={toggleText}
              className='nextArrow inline-block lg:hidden'
              style={{ margin: '10px auto 0', color: 'var(--text-color)', padding: '0.7rem', background: 'white' }}
            >
              {arrowDirection}

            </button>

            {modals.modal3 &&
              <Modal
                isOpen={modals.modal3}
                onClose={() => closeModal('modal3')}
                title="Тариф “полетели”"
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rate
