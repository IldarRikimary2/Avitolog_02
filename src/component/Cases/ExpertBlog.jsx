import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../UI/LazyImage';
import LazyLoaded from '../UI/LazyLoaded';
import expert from '../../image/blog/expert_blog.png'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import axios from 'axios';
// Картинка блога основная
import case_1 from '../../image/blog/case_1.png';
import case_2 from '../../image/blog/case_2.png';
import case_3 from '../../image/blog/case_3.png';
import case_4 from '../../image/blog/case_4.png';
import case_5 from '../../image/blog/case_5.png';
import case_6 from '../../image/blog/case_6.png';


const ExpertBlog = () => {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState([]);
    const imageArray = [case_1, case_2, case_3, case_4, case_5, case_6];

    useEffect(() => {
        // axios.get('https://avitolog-ik.ru/backend/blog.php')
        axios.get('http://127.0.0.1/backend/blog.php')
            .then(response => {
                const data = response.data;
                setBlogData(data.data);
                console.log(data.data)
            })
            .catch(error => {
                console.error('Произошла ошибка при загрузке данных:', error);  
            });
    }, []);

    // console.log(blogData);

    const handleViewBlog = (blog) => {

        // Подготовьте данные для передачи
        const paramNames = ['title', 'description', 'category', 'time', 'image', 'date', 'underName', 'underNameText', 'question', 'questionLi1', 'questionLi2', 'questionLi3', 'questionLi4', 'questionLi5', 'step', 'stepText', 'imgChart2', 'stepTextAdd1', 'stepTextAdd2', 'stepTextAdd3', 'conclusion', 'conclusionText', 'result', 'resultText', 'imgResult'];

        // Создайте объект URLSearchParams и заполните его параметрами из объекта blog
        const searchFullBlogData = new URLSearchParams(
            paramNames.reduce((params, paramName) => {
                if (blog[paramName] !== null && blog[paramName] !== undefined && blog[paramName] !== '') {
                    params[paramName] = blog[paramName];
                }
                return params;
            }, {})
        );

        // Используйте `navigate` с параметрами в URL
        navigate(`/Blogs?${searchFullBlogData.toString()}`);
        scroll.scrollToTop();
    };

    return (
        <div className='max-w-[160rem] mx-auto h-auto mt-[15rem] overflow-hidden'>
            <h1 className='heading-text'>
                <span>узнавай больше в нашем экспертном блоге</span>
            </h1>

            <div className='max-w-[120rem] items-center hidden lg:flex mx-auto px-[2rem] mt-[13rem] justify-center space-x-20'>
                <LazyImage src={expert} alt="Image" className='max-w-auto rounded-[40px]' />
                <div>
                    <div className='flex p-blog-time space-x-9'>
                        <p>Разбор кейсов</p>

                        <div className="dot"></div>

                        <p>15 минут</p>
                    </div>
                    <h2 className='h2-blog-main max-w-[40rem] 2xl:max-w-[56rem]'>
                        Автозагрузка: как автоматизировать работу с объявлениями
                    </h2>
                </div>
            </div>

            {/* Filter Дальше может пригодиться*/}
            {/* <div className='mt-[8rem] xl:mt-[12rem] max-w-[120rem] mx-auto flex space-x-2 px-12 flex-wrap'>
                <button className='button-filter'>
                    Управление
                </button>
                <button className='button-filter'>
                    Разбор кейсов
                </button>
                <button className='button-filter'>
                    Лайфхаки и обучение
                </button>
                <button className='button-filter'>
                    Новости
                </button>
            </div> */}

            {/* Cases */}
            <div className='mt-[7rem] max-w-[120rem] mx-auto rounded-[40px] h-[auto] py-[4rem] px-[2rem] sm:px-[10rem] grid gap-16 gr md:grid-cols-2 xl:grid-cols-3 xl:gap-10 grid-rows-auto '>

                {Array.isArray(blogData) && blogData.map((blog, index) => (
                    <div key={index} className='mx-auto' >
                        <LazyLoaded
                            className='w-[22rem] rounded-[1rem]'
                            src={imageArray[blog.image]}
                            alt={blog.title}
                        />
                        <div className='flex p-blog-time space-x-9 py-[2rem]' style={{ fontSize: '1.5rem' }}>
                            <p>{blog.category}</p>
                            <div className="dot"></div>
                            <p>{blog.time}</p>
                        </div>

                        {/* NewContent */}
                        <h3
                            className='h3-blog'
                            onClick={() => handleViewBlog(blog)}
                        >
                            {blog.title}
                        </h3>

                        <p className='p-text-blog'>{blog.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ExpertBlog
