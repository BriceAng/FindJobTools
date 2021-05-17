import { FAVORITE_OFFER, UNFAVORITE_OFFER } from "../actions/offer.actions";


const initialState = {};

export default function offerReducer(state = initialState, action) {
    switch (action.type) {
        case FAVORITE_OFFER:
            return state.map((offer) => {
                if (offer._id === action.payload.offerId) {
                    return {
                        ...offer,
                        favorite: action.payload
                    };
                }
                return offer;
            });
            case UNFAVORITE_OFFER:
            return state.map((offer) => {
                if (offer._id === action.payload.offerId) {
                    return {
                        ...offer,
                        favorite: action.payload
                    };
                }
                return offer;
            });
        default:
            return state;
    }  
}