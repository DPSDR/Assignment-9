import React from 'react';

const Review = (props) => {
    const { name, description, rating } = props.review;
    return (
        <div className='border-solid border-2 border-orange-100 rounded-lg p-5 m-2'>
            <h1 className='text-2xl'><span className='font-semibold'>Name:</span> {name}</h1>
            <p className='text-1xl mt-2'><span className='font-semibold'>Review:</span> {description}</p>
            <p><span className='font-semibold'>Rating:</span> {rating}</p>
        </div>
    );
};

export default Review;