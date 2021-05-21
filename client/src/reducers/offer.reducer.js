import {
    DELETE_OFFER,
    FAVORITE_OFFER,
    UNFAVORITE_OFFER,
    UPDATE_OFFER
} from "../actions/offer.actions";


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
        case UPDATE_OFFER:
            return state.map((offer) => {
                if (offer._id === action.payload.offerId) {
                    return {
                        ...offer,
                        status: action.payload
                    };
                }
                return offer;
            });
        case DELETE_OFFER:
            return state.map((user) => {
                if (user._id === action.payload.userId) {
                    return {
                        ...user,
                        offers: user.offers.filter(
                            (offer) => offer._id !== action.payload.offerId
                        ),
                    };
                } else return user;
            });
        default:
            return state;
    }
}