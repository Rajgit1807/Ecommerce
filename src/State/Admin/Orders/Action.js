import { useNavigate } from "react-router-dom";

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
  SHIP_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
} from "./ActionType";
import { api } from "../../../config/apiConfig";

export const getAllOrders = () => async (dispatch) => {

  dispatch({ type: GET_ORDERS_REQUEST });

  try {
    const response = await api.get(`/api/admin/orders`);

    dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAILURE,
      payload: error.message,
    });
  }
};

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDER_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    const data = response.data;
    console.log("confirm_order", data);
    dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
  }
};

export const shipOrder = (orderId) =>  async (dispatch) => {
  
  dispatch({ type: SHIP_ORDER_REQUEST });
  
  try {
      
      const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
      
      console.log("shipped order", data);
      
      dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
    }
  };

  export const deliveredOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST });
    try {
      const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
      const data = response.data;
      console.log("delivered order", data);
      dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
    }
  };
  
  export const outForDeliveryOrder = (orderId) => async (dispatch) => {
    dispatch({ type: OUT_FOR_DELIVERY_REQUEST });
    try {
      const response = await api.put(`/api/admin/orders/${orderId}/outfordeliveryorder`);
      const data = response.data;
      console.log("outfordelivery order", data);
      dispatch({ type: OUT_FOR_DELIVERY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: OUT_FOR_DELIVERY_FAILURE, payload: error.message });
    }
  };
  // export const cancelOrder = (orderId) => async (dispatch) => {
  //   dispatch({ type: CANCEL_ORDER_REQUEST });
  //   try {
  //     const response = await api.put(`/api/admin/orders/${orderId}/cencel`);
  //     const data = response.data;
  //     console.log("delivered order", data);
  //     dispatch({ type: CANCEL_ORDER_SUCCESS, payload: data });
  //   } catch (error) {
  //     dispatch({ type: CANCEL_ORDER_FAILURE, payload: error.message });
  //   }
  // };

  export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
      const {data} = await api.delete(`/api/admin/orders/${orderId}/delete`);
      
      console.log("deleted order", data);
      dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
  };