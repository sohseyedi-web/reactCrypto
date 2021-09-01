import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.scss'

const Home = () => {
    const [open , setOpen] = useState(false);
    return (
        <>
        <div className="home">
            <div className="container">
                <div className="home-container">
                    <div className="home-container__title">به صرافی سهیل دیجیتال خوش آمدید</div>
                    <div className="home-container__subtitle">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                    </div>
                    <div className="home-container__items">
                        <Link to="/price" role="button" className="home-container__items-btn">قیمت آنلاین</Link>
                        <Link to="/" onClick={() => setOpen(!open)}  role="button" className="home-container__items-btn">خبرنامه</Link>
                    </div>
                    <div className={open === true ? "home-container__inputbox active-box" : "home-container__inputbox"}>
                        <input type="email" placeholder="example@gmail.com" />
                        <button className="home-container__inputbox-btn">ارسال</button>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default Home;