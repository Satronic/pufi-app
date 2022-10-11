import axios from 'axios';

export const SUSCRIBE_TO_NEWSLETTER = 'SUSCRIBE_TO_NEWSLETTER';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SET_ERROR = 'SET_ERROR';

const API_URL = 'https://formspree.io/f/mwkzbpja';
const API_PRODUCTS_URL = 'https://api.escuelajs.co/api/v1';


export const getProducts = () => {
    return async function(dispatch) {
        
        try {
            const allProducts = await axios.get(`${API_PRODUCTS_URL}/products`);

            if(allProducts.data){
                return dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: allProducts.data
                })
            }
        } catch (error) {
            return dispatch({
                type: SET_ERROR,
                payload: error
            })
        }
    }
};

export const suscribeToNewsletter = (inputForm) => {
    return async function(dispatch) {
        const { email } = inputForm;
        try {
            const response = await axios.post(`${API_URL}`, {
                email: email
            });

            if(response.data.ok){
                return dispatch({
                    type: SUSCRIBE_TO_NEWSLETTER,
                    payload: 'Gracias por suscriberte a nuestro newsletter'
                })
            }
        } catch (error) {
            return dispatch({
                type: SET_ERROR,
                payload: error
            })
        }
    }
};

