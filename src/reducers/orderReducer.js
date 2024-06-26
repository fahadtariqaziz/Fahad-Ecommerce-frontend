import { CLEAR_ERRORS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDER_FAIL, MY_ORDER_REQUEST, MY_ORDER_SUCCESS } from "../constants/orderConstants";


export const newOrderReducer = ( state = {} , action) => {          //isme state empty hai
    switch (action.type) {

        case CREATE_ORDER_REQUEST :
            return{
                ...state,
                loading: true,
            };

        case CREATE_ORDER_SUCCESS :
            return {
                loading: false,
                order : action.payload,   
            };
            
        case CREATE_ORDER_FAIL :
            return {
                loading : true,
                error : action.payload,
            };
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error : null,
            }
            
        default:
            return state;    
    }
}




export const myOrdersReducer = ( state = {orders:[]} , action) => {          //isme state empty hai
    switch (action.type) {

        case MY_ORDER_REQUEST :
            return{
                loading: true,
            };

        case MY_ORDER_SUCCESS :
            return {
                loading: false,
                orders : action.payload,   
            };
            
        case MY_ORDER_FAIL :
            return {
                loading : true,
                error : action.payload,
            };
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error : null,
            }
            
        default:
            return state;    
    }
}