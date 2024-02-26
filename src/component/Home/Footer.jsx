import React, { useState, useEffect } from 'react'
import MyButton from '../UI/Button'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PersonalData from './PersonalData';
import axios from 'axios';
import icon_1 from '../../image/Icons_2.png'
import icon_2 from '../../image/Icons_1.png'
import icon_3 from '../../image/Icons_3.png'
import icon_4 from '../../image/Icons_4.png'

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const [isThanks, setIsThanks] = useState(false);
    const [isModalPersonalOpen, setIsModalPersonalOpen] = useState(false);

    const personalData = () => {
        setIsModalPersonalOpen(!isModalPersonalOpen);
        document.body.style.overflow = 'hidden'; // Запретить прокрутку фона
    };

    const openThanks = () => {
        setIsThanks(true);
    };

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
            openThanks()

            navigate('/Thanks');

            window.scrollTo(0, 0);

        } catch (error) {
            // Обработка ошибок при отправке данных
            console.error('Произошла ошибка:', error);
        }
    };

    // Персональные данные
    const openModalPersonal = () => {
        setIsModalPersonalOpen(true);
        document.body.style.overflow = 'hidden'; // Запретить прокрутку фона
    };

    const closeModalPersonal = () => {
        setIsModalPersonalOpen(false);
        document.body.style.overflow = 'auto'; // Разрешить прокрутку фона
    };

    const handleModalPersonalClick = (e) => {
        // Проверяем, был ли клик на фоне модального окна (или его дочерних элементах)
        if (e.target === e.currentTarget) {
            setIsModalPersonalOpen(false);
        }
    }


    return (
        <div className='w-full h-auto lg:h-[63rem] bg-[var(--background-color)] mt-[7rem] p-[2rem] ' id='contacts'>
            <div className='block lg:flex max-w-[120rem] mx-auto py-[2rem] sm:py-[10rem] '>
                {/* Узнайте подробности в один клик */}
                <div className='w-[26rem] sm:w-[37rem] mx-auto lg:w-[56rem] lg:mx-0 lg:pr-[20rem]'>
                    {isThanks
                        ?
                        // Thanks
                        <div>
                            <h3 className='h2-footer'><span>Спасибо за обращение</span></h3>
                            <h3 className='h2-footer mt-[2rem]'>
                                Наш менеджер свяжется с вами в ближайшее время
                            </h3>
                            {/* <MyButton
                                className='rounded-[50px] mt-[3.2rem] w-[16rem] h-[4.5rem] sm:w-[32rem] sm:h-[5rem] border text-footer-button text-[1.3rem] sm:text-[1.7rem] font-inter hover:bg-[var(--text-color)] hover:border-[var(--text-color)] hover:text-white mx-auto block'

                            >
                                Оставить заявку
                            </MyButton> */}
                        </div>
                        :
                        <>
                            <h2 className='h2-footer'>Узнайте подробности в один клик</h2>
                            <form onSubmit={handleSubmit} >
                                {/* Имя */}
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Имя*'
                                    className='input-transform-gray mt-[4rem]'
                                    style={{ color: 'gray', backgroundBottom: 'gray', width: '90%' }}
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
                                    style={{ color: 'gray', backgroundBottom: 'gray', width: '90%' }}
                                />

                                {/* Проверка для ботов фейковый input */}
                                <input type="text" name="honeypot" style={{ display: 'none' }} />

                                <div className='flex mt-[3.8rem]'>

                                    <label className='flex '>
                                        <input
                                            type="checkbox"
                                            name="согласие"
                                            checked={formData.agreement}
                                            onChange={handleCheckboxChange}
                                            className='mr-2 w-[1.5rem] gray'
                                            required
                                        />
                                    </label>
                                    <div className='gray font-inter text-[0.85rem] sm:text-[1.2rem] text-gray-300'>
                                        {/* Персональные данные */}
                                        <PersonalData />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className='rounded-[50px] mt-[3.2rem] w-[16rem] h-[4.5rem] sm:w-[32rem] sm:h-[5rem] border text-footer-button text-[1.3rem] sm:text-[1.7rem] font-inter hover:bg-[var(--text-color)] hover:border-[var(--text-color)] hover:text-white mx-auto block'
                                >
                                    Отправить
                                </button>

                            </form>
                        </>

                    }
                </div>
                {/* Контакты */}
                <div className='ml-0 sm:ml-[4rem] mt-[4rem] lg:m-0'>
                    <h2 className='h2-footer'>Контакты</h2>
                    <div className='flex mt-[3rem] space-x-10 text-gray-300 p-text-icon'>
                        <img src={icon_1} alt="Icon" />
                        <p className='cursor-pointer hover:text-gray-400 transition-all'>
                            Ivankornwork@gmail.com
                        </p>
                    </div>
                    <div className='flex mt-[3rem] space-x-10 text-gray-300 p-text-icon'>
                        <img src={icon_2} alt="Icon" />
                        <p className='cursor-pointer hover:text-gray-400 transition-all'>
                            +7 (930) 755-75-75
                        </p>
                    </div>
                    <div className='flex mt-[3rem] space-x-10 text-gray-300 p-text-icon'>
                        <img src={icon_3} alt="Icon" />
                        <p className='cursor-pointer hover:text-gray-400 transition-all'>
                            @ik_avitolog
                        </p>
                    </div>
                    <div className='flex mt-[3rem] space-x-10 text-gray-300 p-text-icon'>
                        <img src={icon_4} alt="Icon" />
                        <p className='cursor-pointer hover:text-gray-400 transition-all'>
                            @avitolog_ivankorn
                        </p>
                    </div>
                </div>
            </div>
            <div>
                {/* Line */}
                <div className='max-w-[120rem] h-[0.1rem] bg-gray-300 mx-auto'></div>

                <div className='max-w-[120rem] flex justify-between mx-auto p-footer pt-[2rem]'>
                    {/* Политика конфиденциальности */}
                    <p onClick={personalData} className='cursor-pointer'><u>Политика конфиденциальности</u></p>
                    {isModalPersonalOpen &&
                        <>
                            {/* Затемнение заднего интерфейса */}
                            <div className="overlay-dark" style={{ zIndex: '1000' }} onClick={closeModalPersonal} />
                            {/* Модальное окно */}
                            <div
                                className='modal-personal'
                                style={{ zIndex: '1001' }}
                                onClick={handleModalPersonalClick}
                            >
                                <div className="close-icon" onClick={closeModalPersonal} style={{ position: 'fixed' }}>
                                    <span className="cross text-gray-400">✕</span>
                                </div>
                                <h2 className='heading-text' style={{ fontSize: '18px', paddingBottom: '2rem' }}><span>Политика в отношении обработки персональных данных</span></h2>
                                <div className='p-personal'>
                                    <p>1. Общие положения</p>
                                    <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ИП Корниенко Иван (далее – Оператор).</p>
                                    <p>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
                                    <p>1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://ik-avitolog.ru</p>
                                    <br />
                                    <p>2. Основные понятия, используемые в Политике</p>
                                    <p>2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;</p>
                                    <p>2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</p>
                                    <p>2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://ik-avitolog.ru;</p>
                                    <p>2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;</p>
                                    <p>2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;</p>
                                    <p>2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</p>
                                    <p>2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</p>
                                    <p>2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://ik-avitolog.ru;</p>
                                    <p>2.9. Пользователь – любой посетитель веб-сайта https://ik-avitolog.ru;</p>
                                    <p>2.10. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;</p>
                                    <p>2.11. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;</p>
                                    <p>2.12. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;</p>
                                    <p>2.13. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.</p>
                                    <br />
                                    <p>3. Оператор может обрабатывать следующие персональные данные Пользователя</p>
                                    <p>3.1. Фамилия, имя, отчество;</p>
                                    <p>3.2. Электронный адрес;</p>
                                    <p>3.3. Номера телефонов;</p>
                                    <p>3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).</p>
                                    <p>3.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.</p>
                                    <br />
                                    <p>4. Цели обработки персональных данных</p>
                                    <p>4.1. Цель обработки персональных данных Пользователя — информирование Пользователя посредством отправки электронных писем; заключение, исполнение и прекращение гражданско-правовых договоров; Обзвон Пользователя с целью информацирования и продажи информационных услуг.</p>
                                    <p>4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты Ivankornwork@gmail.com с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».</p>
                                    <p>4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</p>
                                    <br />
                                    <p>5. Правовые основания обработки персональных данных</p>
                                    <p>5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</p>
                                    <p>5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).</p>
                                    <br />
                                    <p>6. Порядок сбора, хранения, передачи и других видов обработки персональных данныхБезопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</p>
                                    <p>6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p>
                                    <p>6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</p>
                                    <p>6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора Ivankornwork@gmail.com с пометкой «Актуализация персональных данных».</p>
                                    <p>6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора Ivankornwork@gmail.com с пометкой «Отзыв согласия на обработку персональных данных».</p>
                                    <br />
                                    <p>7. Трансграничная передача персональных данных</p>
                                    <p>7.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.</p>
                                    <p>7.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.</p>
                                    <br />
                                    <p>8. Заключительные положения</p>
                                    <p>8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты Ivankornwork@gmail.com.</p>
                                    <p>8.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.</p>
                                </div>
                            </div>
                        </>
                    }
                    {/* Год */}
                    <p>&copy; {currentYear}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
