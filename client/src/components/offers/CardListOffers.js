import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/user.actions';
import { isEmpty } from '../Utils';
import FavoriteButton from './FavoriteButton';
import BinButton from './BinButton';
import UpdateOfferForm from './UpdateOfferForm';

import { FaSpinner } from 'react-icons/fa';



const CardListOffers = () => {
    const [loadData, setLoadData] = useState(true);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);


    useEffect(() => {
        if (loadData) {
            dispatch(getUser());
            setLoadData(false)
        }
    }, [loadData, dispatch]);

    return (
        <div>
            <h3>Liste des offres :</h3>
            <div className="offer-list d-flex flex-wrap">
                {!isEmpty(userData) &&
                    userData.offers.map((offer) => {
                        for (let i = 0; i < userData.offers.length; i++) {
                            var cardColor = 'card d-flex col-md-3 m-2';
                            if (offer.status === 2) cardColor += ' bg-danger';
                            else if (offer.status === 3) cardColor += ' bg-success';
                            else cardColor += ' bg-warning';

                            return (
                                <div key={offer._id} className={cardColor}>
                                    <div className="card-header">
                                        {offer.title}
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5>{offer.company}</h5>
                                        <a href={offer.url}>Lien vers l'offre</a>
                                        <div className="tags d-flex justify-content-around">
                                        {offer.tags.map((tag) => {
                                            for (let i = 0; i < offer.tags.length; i++) {
                                                return (
                                                    <span className="badge rounded-pill bg-primary">{tag}</span>
                                                );
                                            }
                                            return null;
                                        })}
                                        </div>
                                        <p>{offer.description}</p>
                                        <UpdateOfferForm offer={offer} />
                                        <div className="update-offer d-flex mt-auto">
                                            <FavoriteButton offer={offer} />
                                            <BinButton offer={offer} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                {isEmpty(userData) && (
                    <h5>Chargement <FaSpinner /></h5>
                )}
            </div>
        </div>
    );
};

export default CardListOffers;