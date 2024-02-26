import React, { useState } from 'react';

const OneQuestion = ({ questionsHeader, questionsText, showTextQuestion }) => {
    const [showText, setShowText] = useState(showTextQuestion);
    const [arrowDirection, setArrowDirection] = useState('˅');

    const toggleText = () => {
        setShowText(!showText);
        setArrowDirection(showText ? '˅' : '˄');
    };

    return (
        <div onClick={toggleText} className={`${showText ? 'border-[var(--primary-color)] bg-[var(--primary-color)] ' : 'border-gray-300'} border rounded-[10px] w-[80%] mx-auto h-[auto] my-10`}>
            <div className='flex justify-between cursor-pointer'>
                <h3 className={`${showText ? 'text-[var(--background--color)]' : 'text-white'} w-[80%] oswald font-medium text-[1.1rem] sm:text-[1.5rem] md:text-[1.8rem] xl:text-[2rem] pl-[1rem] md:pl-[4rem] py-[1.3rem]`}>
                    {questionsHeader}
                </h3>
                <button
                    className='nextArrow bg-none text-white sm:text-black sm:bg-[var(--primary-color)]'
                >
                    {arrowDirection}
                </button>
            </div>
            <p
                className={` ${showText ? '' : 'hidden'}  text-[var(--background--color)] w-[80%] oswald font-normal text-[1.1rem] sm:text-[1.5rem] md:text-[1.8rem] xl:text-[2rem] pl-[1rem] md:pl-[4rem] py-[1.3rem]`}
            >
                {questionsText}
            </p>
        </div>
    );
}

export default OneQuestion;
