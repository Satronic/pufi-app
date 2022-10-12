// import filterProductsByCategory from "../../utils/index.js";

import {
    GET_ALL_PRODUCTS,
    FILTER_PRODUCTS,
    SUSCRIBE_TO_NEWSLETTER,
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
            console.log('Products in actions', action.payload)
            return {
                ...state,
                allProducts: action.payload
            }

        case FILTER_PRODUCTS:
            // const allProducts = state.allProducts;
            // const allCategories = action.payload;
            // const filteredProducts = filterProductsByCategory(allProducts, allCategories);
            return {
                ...state,
                allProducts: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;