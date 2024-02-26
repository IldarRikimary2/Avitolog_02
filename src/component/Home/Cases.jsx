import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// Фото Кейсов ПК версии
import case1 from '../../image/cases/case1.png';
import case2 from '../../image/cases/case2.png';
import case3 from '../../image/cases/case3.png';
import case4 from '../../image/cases/case4.png';
import case5 from '../../image/cases/case5.png';
import case6 from '../../image/cases/case6.png';
import case7 from '../../image/cases/case7.png';
import case8 from '../../image/cases/case8.png';
import case9 from '../../image/cases/case9.png';
import case10 from '../../image/cases/case10.png';
// Фото Телефонной версии
import casePhone1 from '../../image/cases/phone_image/caseP_1.svg';
import casePhone2 from '../../image/cases/phone_image/caseP_2.svg';
import casePhone3 from '../../image/cases/phone_image/caseP_3.svg';
import casePhone4 from '../../image/cases/phone_image/caseP_4.svg';
import casePhone5 from '../../image/cases/phone_image/caseP_5.svg';
import casePhone6 from '../../image/cases/phone_image/caseP_6.svg';
import casePhone7 from '../../image/cases/phone_image/caseP_7.svg';
import casePhone8 from '../../image/cases/phone_image/caseP_8.svg';
import casePhone9 from '../../image/cases/phone_image/caseP_9.svg';
import casePhone10 from '../../image/cases/phone_image/caseP_10.svg';
// картинки добавление
import Modal from './Modal';

const Cases = () => {
    const elementToScroll = useRef(null);
    const casesData = [
        // ПК версия
        { id: 1, title: 'строительство заборов и ворот', imageUrl: case1 },
        { id: 2, title: 'продажа кондиционеров и сплит-систем', imageUrl: case2 },
        { id: 3, title: 'окна от завода', imageUrl: case3 },
        { id: 4, title: 'юридические услуги', imageUrl: case4 },
        { id: 5, title: 'каркасные дома', imageUrl: case5 },
        { id: 6, title: 'строительные материалы', imageUrl: case6 },
        { id: 7, title: 'лазерное оборудование', imageUrl: case7 },
        { id: 8, title: 'выкуп металлолома', imageUrl: case8 },
        { id: 9, title: 'водоочистка', imageUrl: case9 },
        { id: 10, title: 'строительное ограждения', imageUrl: case10 },
    ];

    const casesPhoneData = [
        // Телефонная версия
        { id: 1, title: 'строительство заборов и ворот', imageUrl: casePhone1 },
        { id: 2, title: 'продажа кондиционеров и сплит-систем', imageUrl: casePhone2 },
        { id: 3, title: 'окна от завода', imageUrl: casePhone3 },
        { id: 4, title: 'юридические услуги', imageUrl: casePhone4 },
        { id: 5, title: 'каркасные дома', imageUrl: casePhone5 },
        { id: 6, title: 'строительные материалы', imageUrl: casePhone6 },
        { id: 7, title: 'лазерное оборудование', imageUrl: casePhone7 },
        { id: 8, title: 'выкуп металлолома', imageUrl: casePhone8 },
        { id: 9, title: 'водоочистка', imageUrl: casePhone9 },
        { id: 10, title: 'строительное ограждения', imageUrl: casePhone10 },
    ];

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true)
        document.body.style.overflow = 'hidden'; // Запретить прокрутку фона
    };

    const closeModal = () => {
        setModal(false)
        document.body.style.overflow = 'auto'; // Разрешить прокрутку фона
    };

    const [selectedCase, setSelectedCase] = useState(casesData[0]);
    const [selectedCasePhone, setSelectedCasePhone] = useState(casesPhoneData[0]);

    const handleButtonClick = (caseData, button) => {
        setSelectedCase(caseData);
        // Убираем класс 'saved' со всех кнопок
        document.querySelectorAll('.button-cases').forEach((el) => {
            el.classList.remove('saved');
        });
        // Добавляем класс 'saved' только к кнопке, которая была нажата
        button.classList.add('saved');
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleButtonPhoneClick = (casesPhoneData) => {
        setSelectedCasePhone(casesPhoneData);
    };

    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView();
        }
    }, [targetId]);


    return (
        <div className='max-w-[120rem] h-auto mx-auto mt-[4rem] md:mt-[7rem]' ref={elementToScroll} id='cases'>
            <h2 className='heading-text px-[4rem] h-[4rem] xl:text-left '>кейсы <span>ivan korn marketing agency</span></h2>
            {/* Названия кейсов */}
            <div className='hidden max-w-[80rem] 2xl:max-w-[100rem] h-auto mx-auto mt-[5rem] px-[15rem] justify-between xl:flex xl:flex-wrap xl:px-0'>
                {casesData.map((caseData) => (
                    <button
                        key={caseData.id}
                        className={`button-cases ${selectedCase === caseData ? 'saved' : ''}`}
                        onClick={(e) => handleButtonClick(caseData, e.currentTarget)}>
                        {caseData.title}
                    </button>
                ))}
                <Link to="./Cases" onClick={scrollToTop} className='oswald text-[1.8rem] float-right mt-8'><span>Больше кейсов →</span></Link>
            </div>


            {/* Для телефона */}
            <div className='inline-block xl:hidden w-full h-auto'>
                <h3 className="uppercase oswald font-semibold text-white text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] mb-10 text-center mt-[5rem]">{selectedCasePhone.title}</h3>
                <div className='justify-center md:justify-between flex max-w-[78.3rem] mx-auto'>
                    <button
                        onClick={() => {
                            const newId = (selectedCasePhone.id - 2 + casesPhoneData.length) % casesPhoneData.length;
                            handleButtonPhoneClick(casesPhoneData[newId]);
                        }}
                        className='prevArrowNoHover my-auto text-[var(--primary-color)] ' style={{ fontSize: '30px', padding: '1px 20px' }}>
                        &lt;
                    </button>

                    <img src={selectedCasePhone.imageUrl} alt="Image Case" className='w-2/3 sm:w-3/4 mt-0 sm:mt-[2rem] px-0 sm:px-[2.4rem]' />

                    <button
                        onClick={() => {
                            const newId = (selectedCasePhone.id % casesPhoneData.length);
                            handleButtonPhoneClick(casesPhoneData[newId]);
                        }}
                        className='nextArrowNoHover text-[var(--primary-color)] ' style={{ fontSize: '30px', padding: '1px 20px' }}>
                        &gt;
                    </button>
                </div>
            </div>

            {/* Кейсы */}
            <div className='hidden xl:inline-block'>
                <img src={selectedCase.imageUrl} alt="Image Case" className='mx-auto mt-[2rem] px-[2.4rem] sm:px-[10rem] lg:px-[30rem] 2xl:px-[20rem]' />
            </div>

            {/* Кнопки */}
            <div className="flex justify-center mt-24 space-x-20">
                <button
                    onClick={openModal}
                    className="btn-calc">
                    Хочу также
                </button>

                <ScrollLink
                    to='contacts'
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='btn-blog lg:inline-block hidden'
                >
                    Бесплатный аудит
                </ScrollLink>

            </div>

            {/* Модальное окно */}

            {modal &&
                <Modal
                    onClose={() => closeModal()}
                />
            }
        </div>
    );
}

export default Cases;
