import React, { useState } from 'react';
import LogoImage from '../../image/Logo.png';
import phone from '../../image/phone.png';
import telegram from '../../image/teleg.png';
import whatsapp from '../../image/what.png';
import menu from '../../image/menu.svg';
import message from '../../image/message.png';
import decoration from '../../image/block.png';
import decor from '../../image/decor.png';
import MyButton from '../UI/Button'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const Header = ({ menuLinks, isBlogPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

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

  const handlePhoneClick = () => {
    setIsPhoneOpen(!isPhoneOpen)
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToTopAndCloseModal = () => {
    scroll.scrollToTop();
    closeModal();
  };

  return (
    <div className="overlay-menu">
      {/* Затемнение заднего интерфейса */}
      {isModalOpen && <div className="overlay" onClick={closeModal} />}

      <Link to="/" onClick={scrollToTop} className="w-[50%] md:w-[25%] p-[0.2rem] sm:p-[1rem] lg:p-[1rem] order-2 md:order-1">
        <img className=' w-[49px] h-auto mx-auto md:mx-0 md:w-[80px] 2xl:w-[101.1px]' src={LogoImage} alt="logo" />
      </Link>

      {/*  */}

      <div className='w-[50%] hidden md:block order-2'>
        <nav className='mx-auto'>
          <ul className='text-white mx-auto w-auto justify-center flex text-[1.8rem] font-inter space-x-10 '>
            {/* Между страницами */}
            <li className='inline cursor-pointer'>
              {isBlogPage ? (
                <Link
                  to="./Company"
                  onClick={scrollToTop}
                  className='p-menu-nav'
                >
                  О компании
                </Link>
              )
                :
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className='p-menu-nav'
                >
                  Главная
                </Link>
              }
            </li>

            {/* Скролл по якорям */}
            {menuLinks && menuLinks.map((link, index) => (
              <li className='inline cursor-pointer' key={index}>
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='p-menu-nav'
                >
                  {link.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Контакты */}
      <div className='w-[33%] md:w-[25%] order-1 md:order-3'>
        <div className='p-[1rem] flex  md:float-right my-auto space-x-3 lg:space-x-6'>
          <div className='flex '>
            {isPhoneOpen && <p className='text-white text-[1.2rem] m-[1rem]'>+7 (930) 755-75-75</p>}
            <img
              onClick={handlePhoneClick}
              className='hidden sm:block cursor-pointer hover:opacity-50 w-[19px] h-auto md:w-10 2xl:w-14'
              src={phone}
              alt="phone"
            />
          </div>
          {isPhoneOpen ? null :
            <div className='flex space-x-3 lg:space-x-6'>
              <a href="//t.me/ik_avitolog" target="_blank" rel="noopener noreferrer"><img className='hover:opacity-50 w-[19px] h-auto md:w-10 2xl:w-14' src={telegram} alt="telegram" /></a>
              <a href="//wa.me/89307557575?" target="_blank" rel="noopener noreferrer"><img className='hover:opacity-50 w-[19px] h-auto md:w-10 2xl:w-14' src={whatsapp} alt="whatsapp" /></a>
            </div>
          }

          {/*  */}
        </div>
      </div>

      {/* Бургер меню */}
      <div className='md:hidden w-[33%] order-3'>
        <img
          onClick={openModal}
          className=' cursor-pointer float-right inline-block ml-auto w-auto h-[15.4px] mr-[1rem] my-auto '
          src={menu}
          alt="Menu"
        />
      </div>

      {isModalOpen && (
        <>
          {/* Затемнение заднего интерфейса */}
          <div className="overlay-dark" onClick={closeModal} />

          {/* Модальное окно меню */}
          <div className="modal-container-menu" onClick={handleModalClick}>
            <div className="close-icon" onClick={closeModal}>
              <span className="cross text-gray-400 hover:text-gray-50">✕</span>
            </div>

            {/* Line */}
            <div className='max-w-[120rem] mt-16 h-[0.1rem] bg-gray-300 mx-auto'></div>
            <div className='flex justify-around mt-20'>
              <nav>
                <ul className='text-white uppercase'>
                  <li className='block cursor-pointer modal-menu-li'>
                    <Link
                      to="/"
                      onClick={scrollToTopAndCloseModal}

                    >
                      Главная
                    </Link>
                  </li>
                  <li className='block cursor-pointer modal-menu-li'>
                    <Link
                      to="./Company"
                    >
                      О компании
                    </Link>
                  </li>
                  <li className='block cursor-pointer modal-menu-li'>
                    <ScrollLink
                      to="cases"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={closeModal}
                    >
                      Кейсы
                    </ScrollLink>
                  </li>
                  {/* <li className='block cursor-pointer modal-menu-li'>
                    <ScrollLink
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      О нас
                    </ScrollLink>
                  </li> */}
                  <li className='block cursor-pointer modal-menu-li'>
                    <ScrollLink
                      to="reviews"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={closeModal}
                    >
                      Отзывы
                    </ScrollLink>
                  </li>
                </ul>
              </nav>

              {/* Блог + Контакты */}
              <nav className='uppercase'>
                <ul>
                  <li className='block cursor-pointer modal-menu-about'>
                    <Link
                      to="/Cases"
                      onClick={scrollToTopAndCloseModal}
                    >
                      Блог
                    </Link>
                  </li>
                  <li className='block cursor-pointer modal-menu-about'>
                    <ScrollLink
                      to="contacts"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={closeModal}
                    >
                      Контакты
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            </div>

            <button className="btn-calc block mx-auto mt-20">
              <ScrollLink
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeModal}
              >
                Получить аудит
              </ScrollLink>
            </button>


            {/* Line */}
            <div className='max-w-[120rem] mt-16 h-[0.1rem] bg-gray-300 mx-auto '></div>

            {/* Icons */}
            <div className='flex justify-around mt-10'>
              <div className='flex'>
                {isPhoneOpen && <p className='text-white m-[1rem]'>+7 (930) 755-75-75</p>}
                <img
                  onClick={handlePhoneClick}
                  className='w-[38px]'
                  src={phone}
                  alt="phone"
                />
              </div>
              {!isPhoneOpen && <a href="//t.me/ik_avitolog" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="Icon" className='w-[38px]' /></a>}
              {!isPhoneOpen && <a href='//wa.me/89307557575? ' target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" className='w-[38px]' /></a>}
            </div>

          </div>
        </>
      )
      }
    </div>
  )
}

export default Header;
