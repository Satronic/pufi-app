import axios from 'axios';


export const SUSCRIBE_TO_NEWSLETTER = 'SUSCRIBE_TO_NEWSLETTER';
export const SET_ERROR = 'SET_ERROR';

const API_URL = 'https://formspree.io/f/mwkzbpja';


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

