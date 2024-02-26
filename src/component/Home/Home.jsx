import React from 'react';
import Main from './Main'
import Achievements from './Achievements';
import Professionals from './Professionals';
import Form from './Form';
import Rate from './Rate';
import AvitoMessage from './AvitoMessage';
import Questions from '../Questions/Questions';
import WeCan from './WeCan';
import LinkBlog from './LinkBlog';
import FiveSteps from './FiveSteps';
import Footer from './Footer';
import Cases from './Cases';
import Problem from './Problem';
import Header from './Header';
import GetFree from './GetFree';
import { Helmet } from 'react-helmet'; // title
import Test from './Test';
import OpenTest from './OpenTest';
import ScrollMovingObject from '../UI/ScrollMovingObject';


const Home = () => {

    return (
        <div className="mx-auto max-w-[160rem] h-full pt-[20px] lg:pt-0 overflow-hidden relative">
            <Helmet>
                <title>Услуги авитолога с гарантией результата</title>
            </Helmet>

            <Main />

            {/* ГАРАНТИРУЕМ РЕЗУЛЬТАТ В ЛИДЕРАХ */}
            <Achievements />

            {/* кейсы ivan korn marketing agency */}
            <Cases />

            {/* ПРОФЕССИОНАЛЫ, СОЗДАЮЩИЕ ПРОЕКТ */}
            <Professionals />

            {/* 5 шагов успешного проекта */}
            <FiveSteps />

            {/* ЗАПУСКАЕМ ТРАНСФОРМАЦИИЮ */}
            <Form />

            {/* ТЫ ТОЧНО НАЙДЕШЬ ПОДХОДЯЩИЙ ДЛЯ СЕБЯ ВАРИАНТ */}
            <Rate />

            {/* Пройдите опрос и получите ориентировочный бюджет уже через 15 минут. */}
            <OpenTest />

            {/* ТЫ решишь свою проблему */}
            <Problem />

            {/* ЧТО ГОВОРЯТ О НАС НАШИ КЛИЕНТЫ */}
            <AvitoMessage />

            {/* ОТВЕЧАЕМ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ */}
            <Questions />

            {/* Получите бесплатную консультацию */}
            <GetFree />

            {/* Вам может понадобиться - мы умеем! */}
            <WeCan />

            {/* Еще больше фишек вы узнаете в нашем блоге */}
            <LinkBlog />

            <Footer />
        </div>
    )
}

export default Home
