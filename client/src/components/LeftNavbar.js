import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { RiArticleLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';


const LeftNavbar = () => {
    return (
        <div className="left-nav-container">

            <NavLink to='/' exact activeClassName="active-left-nav">
                <BiHome />
            </NavLink>

            <NavLink to='/offers' exact activeClassName="active-left-nav">
                <RiArticleLine />
            </NavLink>

            <NavLink to='/profil' exact activeClassName="active-left-nav">
                <FaRegUser />
            </NavLink>
            
        </div>
    );
};

export default LeftNavbar;
