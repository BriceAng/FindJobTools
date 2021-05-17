import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteOffer, unFavoriteOffer } from '../../actions/offer.actions';

//React icons
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';

const FavoriteButton = ({offer}) => {
    const [favored, setFavored] = useState(false);
    const userData = useSelector((state) => state.userReducer);
    const offerId = offer._id;
    const dispatch = useDispatch();

    const favorite = () => {
        dispatch(favoriteOffer(userData._id, offerId, favored))
        setFavored(true);
    };

    const unFavorite = () => {
        dispatch(unFavoriteOffer(userData._id, offerId, favored))
        setFavored(false);
    };

    useEffect(() => {
        if(offer.favorite === true) setFavored(true);
    },[offer])
    return (
        <div className="favorite-container">
            {favored === false && (
                <BsStar onClick={favorite} />
            )}
            {favored === true && (
                <BsStarFill onClick={unFavorite} />
            )}
        </div>
    );
};

export default FavoriteButton;