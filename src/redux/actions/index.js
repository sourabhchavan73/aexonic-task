import items from '../../api/items';
import { 
    CREATE_CART,
    FETCH_CARTITEM,
    FETCH_CARTITEMS,
    EDIT_COUNTER } from './types';

export const createCart = mealSelected => async dispatch => {
    const response = await items.post('/cart', mealSelected);

    dispatch({
        type: CREATE_CART,
        payload: response.data
    })
}

export const fetchCartItems = () => async dispatch => {
    const response = await items.get('/cart');

    dispatch({
        type: FETCH_CARTITEMS,
        payload: response.data
    })
}

export const fetchCartItem = id => async dispatch => {
    const response = await items.get(`/cart/${id}`)

    dispatch({
        type: FETCH_CARTITEM,
        payload: response.data
    })
}

export const editCounter = (id, counter) => async dispatch => {
    const response = await items.put(`/cart/${id}`, counter);

    dispatch({
        type: EDIT_COUNTER,
        payload: response.data
    })
}

