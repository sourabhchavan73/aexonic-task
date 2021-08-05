import _ from 'lodash'
import { 
    CREATE_CART,
    FETCH_CARTITEM,
    FETCH_CARTITEMS,
    EDIT_COUNTER } from '../actions/types';

    export default ( state = {}, action) => {
        switch (action.type) {
            case FETCH_CARTITEMS:
                return { ...state, ..._.mapKeys(action.payload, 'id') };

            case FETCH_CARTITEM:
                return { ...state, [action.payload.id]: action.payload };

            case CREATE_CART:
                return { ...state, [action.payload.id]: action.payload }

            case EDIT_COUNTER:
                return { ...state, [action.payload.id]: action.payload }

            default:
                return state;
        }
    }