import {
    SUSCRIBE_TO_NEWSLETTER
} from "../Actions";

const initialState = {
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

        default:
            return state;
    }
}

export default rootReducer;