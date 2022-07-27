import React from 'react';
import HomeReviews from '../HomeReviews/HomeReviews';


const Home = () => {
    return (
        <div>
            <div className='container mx-auto grid md:grid-cols-2 items-center mt-10'>
                <section className='text-start ml-10'>
                    <h1 className='text-3xl font-bold'>Best Budget: Axe Body Spray for Men</h1>
                    <p className='mt-5 text-gray-500'>Dark Temptation is a little bit spicy, and a lot sweet, blending notes of hot chocolate (hm!), amber, and peppercorn. It's the finest fragrance of Axe's all-day-fresh body sprays, and one of the furthest from “this smells like a seventh-grader would wear it." It's also super affordable, making it an easy pick-up when you're next at the drugstore</p>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5'>Live Demo</button>
                </section>
                <section className=''>
                    <img className='' style={{ margin: '0 auto' }} src={process.env.PUBLIC_URL + "images/body_spray.png"} alt='body-spray' />
                </section>
            </div>
            <div className=''>
                <HomeReviews></HomeReviews>
            </div>
        </div>
    );
};

export default Home;