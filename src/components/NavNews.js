import React from 'react';
import './NavNews.css';
import HamburgerDrawer from '../components/HamburgerDrawer';

const NavNews = ({ setCategory }) => {
    return (
        <div className='nav'>
            <div className='icon'>
                <HamburgerDrawer setCategory={setCategory} />
            </div>
            <img 
            style={{coursor: 'pointer'}}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpjGNAu98JHjg1soSzqa7X2hvCt12snsMEw&usqp=CAU'
            height='80%'
            alt='logo' />
        </div>
    );
};

export default NavNews
