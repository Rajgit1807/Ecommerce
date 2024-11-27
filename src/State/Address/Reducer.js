import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, FIND_ADDRESS_BY_ID_FAILURE, FIND_ADDRESS_BY_ID_REQUEST, FIND_ADDRESS_BY_ID_SUCCESS, FIND_ADDRESSES_BY_ID_FAILURE, FIND_ADDRESSES_BY_ID_REQUEST, FIND_ADDRESSES_BY_ID_SUCCESS } from "./ActionType"

const initialState ={
    addresses:[],
    address:null,
    loading:false,
    error:null,
}

export const addressesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FIND_ADDRESSES_BY_ID_REQUEST:
            return { ...state, loading: true };
        case FIND_ADDRESSES_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, addresses: action.payload };
        case FIND_ADDRESSES_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case FIND_ADDRESS_BY_ID_REQUEST:
            return { ...state, loading: true };
        case FIND_ADDRESS_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, address: action.payload };
        case FIND_ADDRESS_BY_ID_FAILURE:
                return { ...state, loading: false, error: action.payload };
        // CREATE ADDRESS
        case CREATE_ADDRESS_REQUEST:
            return { ...state, loading: true };
        case CREATE_ADDRESS_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                error: null, 
                address: action.payload 
            };
        case CREATE_ADDRESS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
