import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Reviews', link: '/reviews' },
        { id: 3, name: 'DashBoard', link: '/dashboard' },
        { id: 4, name: 'Blogs', link: '/blogs' },
        { id: 5, name: 'About', link: '/about' },
    ]
    return (
        <div className='navbar md:flex my-0 mx-auto p-3'>
            {
                routes.map(route => <CustomLink
                    key={route.id}
                    to={route.link}
                    className='mr-5 font-lato text-xl'
                >{route.name}</CustomLink>)
            }
        </div>
    );
};

export default Header;