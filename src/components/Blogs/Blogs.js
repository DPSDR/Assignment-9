import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className='container mx-auto text-start my-5'>
                <h1 className='text-2xl mb-5 font-semibold'>What is Context Api?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            </section>
            <section className='container mx-auto text-start my-5'>
                <h1 className='text-2xl mb-5 font-semibold'>What is Semantic Tag?</h1>
                <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.</p>
            </section>
            <section className='container mx-auto text-start my-5'>
                <h1 className='text-2xl mb-5 font-semibold'>What is inline block elements?</h1>
                <p>An inline element does not start on a new line and it only takes up as much width as necessary. </p>
            </section>
        </div>
    );
};

export default Blogs;