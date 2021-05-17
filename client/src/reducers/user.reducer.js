import { GET_USER, UPDATE_COMMENT } from "../actions/user.actions";


const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case UPDATE_COMMENT:
            return {
                ...state,
                comment: action.payload
            };
        default:
            return state;
    }
}
