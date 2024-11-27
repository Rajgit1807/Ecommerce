
import { api } from "../../config/apiConfig";
import { CREATE_ADDRESS_FAILURE, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_SUCCESS, FIND_ADDRESS_BY_ID_FAILURE, FIND_ADDRESS_BY_ID_REQUEST, FIND_ADDRESS_BY_ID_SUCCESS, FIND_ADDRESSES_BY_ID_FAILURE, FIND_ADDRESSES_BY_ID_REQUEST, FIND_ADDRESSES_BY_ID_SUCCESS } from "../Address/ActionType";

export const findAddressesById = (addressIds) => async (dispatch) => {
  console.log(addressIds)
  dispatch({ type: FIND_ADDRESSES_BY_ID_REQUEST });
  try{
    const {data} = await api.get(`/api/address/getall`,{params:addressIds});

    console.log("address data",data);

    dispatch({ type: FIND_ADDRESSES_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_ADDRESSES_BY_ID_FAILURE, payload: error.message });
  }
};

export const findAddressById = (addressId) => async (dispatch) => {

  dispatch({ type: FIND_ADDRESS_BY_ID_REQUEST });
  console.log(addressId)
  try{
    const {data} = await api.get(`/api/address/${addressId}`);

    dispatch({ type: FIND_ADDRESS_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_ADDRESS_BY_ID_FAILURE, payload: error.message });
  }
};

export const createAddress = (address) => async (dispatch) => {
  dispatch({ type: CREATE_ADDRESS_REQUEST });
  try{
    const {data} = await api.post(`/api/address/create`,address);
    dispatch({ type: CREATE_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ADDRESS_FAILURE, payload: error.message });
  }
};
