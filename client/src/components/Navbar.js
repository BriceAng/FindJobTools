import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Log/Logout';
import { UidContext } from './AppContext';
import { BiLogInCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to="/">
                        <div className="logo d-flex">
                            <img src="" alt="" />
                            <h3>FindJOB</h3>
                        </div>
                    </NavLink>
                </div>
                {uid ? (
                    <ul>
                        <li></li>
                        <li className="welcome">
                            <NavLink exact to="/offers">
                                <h5>Bienvenue {userData.firstName}</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink exact to="/profil">
                                connexion <BiLogInCircle />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;