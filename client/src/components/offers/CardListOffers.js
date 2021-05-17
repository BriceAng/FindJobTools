import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/user.actions';
import { isEmpty } from '../Utils';
import FavoriteButton from './FavoriteButton';

import { FaSpinner } from 'react-icons/fa';

const CardListOffers = () => {
    const [loadData, setLoadData] = useState(true);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);


    useEffect(() => {
        if(loadData) {
            dispatch(getUser());
            setLoadData(false)
        }
    }, [loadData, dispatch])
    return (
        <div>
            <h3>Liste des offres :</h3>
            <div className="offer-list">
                <ul>
                {!isEmpty(userData) && 
                    userData.offers.map((offer) => {
                        for(let i = 0; i < userData.offers.length; i++) {
                            return (
                                <li key={offer._id}>
                                    <div className="card col-md-3">
                                        <div className="card-header">
                                            {offer.title}
                                        </div>
                                        <div className="card-body">
                                            <h5>{offer.company}</h5>
                                            <a href={offer.url}>Lien vers l'offre</a>
                                            <p>{offer.description}</p>
                                            <div className="update-offer">
                                                <FavoriteButton offer={offer}/>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            )
                        }
                    })}
                {isEmpty(userData) && (
                    <h5>Chargement <FaSpinner /></h5>
                )}
                </ul>
            </div>
        </div>
    );
};

export default CardListOffers;