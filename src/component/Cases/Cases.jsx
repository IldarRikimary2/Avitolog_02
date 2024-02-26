import React from 'react'
import Header from "../Home/Header";
import ExpertBlog from './ExpertBlog';
import Footer from '../Home/Footer';
import { Helmet } from 'react-helmet'; // title


const Cases = () => {

    const menuLinks = [
        { to: "contacts", text: "Контакты" },
        { to: "contacts", text: "Хочу также" },
    ];

    return (

        <div className="mx-auto max-w-[160rem] h-auto">
            <Helmet>
                <title>Блог</title>
            </Helmet>

            <Header menuLinks={menuLinks} isBlogPage={false} />

            {/* узнавай больше в нашем экспертном блоге */}
            <ExpertBlog />

            <Footer />
        </div>
    )
}

export default Cases
