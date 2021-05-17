import axios from 'axios';

export const FAVORITE_OFFER = "FAVORITE_OFFER";
export const UNFAVORITE_OFFER = "UNFAVORITE_OFFER";

export const favoriteOffer = (userId, offerId, favored) => {
    return (dispatch) => {
        axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/user/add-favorite/${userId}`,
            data: { offerId, favored }
        })
        .then((res) => {
            dispatch({ type: FAVORITE_OFFER, payload: { userId, offerId, favored } });
        })
        .catch((err) => console.log(err));
    };
};

export const unFavoriteOffer = (userId, offerId, favored) => {
    return (dispatch) => {
        axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/user/remove-favorite/${userId}`,
            data: { offerId, favored }
        })
        .then((res) => {
            dispatch({ type: FAVORITE_OFFER, payload: { userId, offerId, favored } });
        })
        .catch((err) => console.log(err));
    };
}