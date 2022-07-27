import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';

const HomeReviews = () => {
    const [reviews] = useReviews();
    const newReviews = reviews.slice(0, 3);
    console.log(newReviews)
    return (
        <div className='mb-5'>
            <h1 className='text-3xl font-normal my-4'>Customers Reviews (3)</h1>
            <section className='grid md:grid-cols-3'>
                {
                    newReviews.map(newReview => <div className='border-solid border-2 border-orange-100 rounded-lg p-5 m-2'>
                        <h1 className='text-2xl'><span className='font-semibold'>Name:</span> {newReview.name}</h1>
                        <p className='text-1xl mt-2'><span className='font-semibold'>Review:</span> {newReview.description}</p>
                        <p><span className='font-semibold'>Rating:</span> {newReview.rating}</p>
                    </div>)
                }
            </section>
            <Link to='/reviews'>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-5'>See All Reviews</button>
            </Link>
        </div>
    );
};

export default HomeReviews;