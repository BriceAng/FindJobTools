import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/user.actions';
import { isEmpty } from '../Utils';
//component
import Fav from './FavoriteButton';
import Bin from './BinButton';
//react Icons
import { FaSpinner } from 'react-icons/fa';

const ListGroupFavorite = () => {
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
            <h5>Retrouver vos offres favorite</h5>
            <ul className="list-group">
                {!isEmpty(userData) &&
                    userData.offers.map((offer) => {
                        for (let i = 0; i < userData.offers.length; i++) {
                            if (offer.favorite === true) {
                                var cardColor = 'list-group-item d-flex';
                                if (offer.status === 2) cardColor += ' bg-danger';
                                else if (offer.status === 3) cardColor += ' bg-success';
                                else cardColor += ' bg-warning';

                                return (
                                    <li key={offer._id} className={cardColor}>
                                        {offer.title} 
                                        ({offer.company})
                                        <Fav offer={offer} />
                                        <Bin offer={offer} />
                                    </li>
                                );
                            }
                        }
                        return null;
                    })}
                {isEmpty(userData) && (
                    <h5>Chargement <FaSpinner /></h5>
                )}
            </ul>
        </div>
    );
};

export default ListGroupFavorite;