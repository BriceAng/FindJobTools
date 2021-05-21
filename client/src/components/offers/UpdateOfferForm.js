import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOffer } from '../../actions/offer.actions';

const UpdateOfferForm = ({offer}) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const offerId = offer._id;
    const [status, setStatus] = useState();
    
    const updateOfferStatus = () => {
        dispatch(updateOffer(userData._id, offerId, status))
    }

    return (
        <form action="" onSubmit={updateOfferStatus} id="update-status">
            <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                <option value="1">En attente</option>
                <option value="2">Réponse négative</option>
                <option value="3">Réponse positive</option>
            </select>
            <input type="submit" value="modifier" />
        </form>
    );
};

export default UpdateOfferForm;