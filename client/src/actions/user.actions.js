import axios from 'axios';

export const GET_USER = "GET_USER";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const updateComment = (userId, comment) => {
    return (dispatch) => {
        return axios ({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
            data: { comment }
        })
        .then((res) => {
            dispatch({ type: UPDATE_COMMENT, payload: comment });
        })
        .catch((err) => console.log(err));
    };
};