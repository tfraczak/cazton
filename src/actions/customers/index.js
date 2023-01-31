import axios from 'axios';
import {
  CUSTOMER_ERROR,
  RECEIVE_CUSTOMERS,
} from '../../constants';
import { formatResponseData } from '../../helpers';

const URL = 'https://fakestoreapi.com/products/users';

const receiveCustomers = (payload) => ({ type: RECEIVE_CUSTOMERS, payload });
const receiveCustomersError = (payload) => ({ type: CUSTOMER_ERROR, payload });

export const getCustomers = () => async (dispatch) => {
  const response = await axios.get(URL);
  if (response.status.toString().match(/2\d\d/)) {
    const payload = formatResponseData(response.data);
    return dispatch(receiveCustomers(payload));
  }

  return dispatch(receiveCustomersError(['Something went wrong while fetching customers...']));
};