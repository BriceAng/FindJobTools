import React from 'react';
import { useSelector } from 'react-redux';

const CardListOffers = () => {
    const userData = useSelector((state) => state.userReducer);

    return (
        <div>
            Liste des offres :
        </div>
    );
};

export default CardListOffers;