import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import { BiLogOut } from "react-icons/bi";

const Logout = () => {

    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, { expires: 1 });
        }
    };

    const logout = async () => {
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true,
        })
        .then(() => removeCookie('jwt'))
        .catch((err) => console.log(err));

        window.location = "/";
    };

    return (
        <li onClick={logout}>
            Déconnexion <BiLogOut />
        </li>
    );
};

export default Logout;