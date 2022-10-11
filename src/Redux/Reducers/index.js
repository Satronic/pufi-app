import {
    SUSCRIBE_TO_NEWSLETTER,
    GET_ALL_PRODUCTS
} from "../Actions";

const initialState = {
    allProducts: [],
    message: {},
    error: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUSCRIBE_TO_NEWSLETTER:
            return {
                ...state,
                message: {msg: action.payload}
            }

        case GET_ALL_PRODUCTS:
            console.log(action.payload);
            return {
                ...state,
                allProducts: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;