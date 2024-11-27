import {
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  OUT_FOR_DELIVERY_FAILURE,
  OUT_FOR_DELIVERY_REQUEST,
  OUT_FOR_DELIVERY_SUCCESS,
  PLACED_ORDER_FAILURE,
  PLACED_ORDER_REQUEST,
  PLACED_ORDER_SUCCESS,
  SHIP_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
} from "./ActionType";

const initialState = {
  orders: [],
  error: null,
  loading: false,
  confirmed:null,
  placed: null,
  delivered:null,
  canceled:null,
  shipped: null,
  deleted:null,
  outfordel:null
};

export const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { ...state, loading: true };
    case GET_ORDERS_SUCCESS:
      return { ...state,loading: false, error: null, orders: action.payload };
    case GET_ORDERS_FAILURE:
      return { ...state,loading: false, orders: [], error: action.payload };
    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCEL_ORDER_REQUEST:
      return { ...state, loading: false };
    case CONFIRMED_ORDER_SUCCESS:
      return { ...state, confirmed: action.payload, loading: false };
    case PLACED_ORDER_SUCCESS:
      return { ...state, placed: action.payload, loading: false };
    case DELIVERED_ORDER_SUCCESS:
      return { ...state, delivered: action.payload, loading: false };
    case CANCEL_ORDER_SUCCESS:
      return { ...state, canceled: action.payload, loading: false };
    case CONFIRMED_ORDER_FAILURE:
    case PLACED_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case CANCEL_ORDER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case DELETE_ORDER_REQUEST:
      return { ...state, loading: true };
    case DELETE_ORDER_SUCCESS:
      return { ...state,loading: false, deleted:action.payload};
    case DELETE_ORDER_FAILURE:
        return {...state,loading:false, error: action.payload}
    case SHIP_ORDER_REQUEST:
        return { ...state, loading: true, error:null}
    case SHIP_ORDER_SUCCESS:
        return { ...state, loading: false, shipped: action.payload}
    case SHIP_ORDER_FAILURE:
        return {...state, loading: false, error: action.payload}
    case OUT_FOR_DELIVERY_REQUEST:
        return { ...state, loading: true, error:null}
    case OUT_FOR_DELIVERY_SUCCESS:
        return { ...state, loading: false, outfordel: action.payload}
    case OUT_FOR_DELIVERY_FAILURE:
            return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};