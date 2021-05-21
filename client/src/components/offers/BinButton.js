import React from 'react';
import { deleteOffer } from '../../actions/offer.actions';
import { useDispatch, useSelector } from 'react-redux';


import { ImBin } from 'react-icons/im';

const BinButton = ({ offer }) => {
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteOffer(userData._id, offer._id));
    }

    return (
        <div className="delete-container">
            <ImBin onClick={() => {
                if (window.confirm("Voulez-vous supprimer cette offre ?")) {
                    handleDelete();
                }
            }} />
        </div>
    );
};

export default BinButton;