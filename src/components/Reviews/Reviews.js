import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div>
            <h1 className='text-3xl font-normal mb-4'>What our customers say!</h1>
            <div className='container mx-auto grid md:grid-cols-2 gap-3 mb-4'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;