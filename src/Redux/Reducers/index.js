// import filterProductsByCategory from "../../utils/index.js";

import {
    GET_ALL_PRODUCTS,
    FILTER_PRODUCTS,
    CHANGE_PAGE,
    SUSCRIBE_TO_NEWSLETTER,
} from "../Actions";

const initialState = {
    allProducts: [],
    pages: [0, 15],
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
            return {
                ...state,
                allProducts: action.payload
            }

        case FILTER_PRODUCTS:
            return {
                ...state,
                pages: [0, 15],
                allProducts: action.payload
            }

        case CHANGE_PAGE:
            console.log(action.payload);
            return {
                ...state,
                pages: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;