import axios from 'axios';
import {
  PRODUCT_ERROR,
  RECEIVE_PRODUCTS,
} from '../../constants';
import { formatResponseData } from '../../helpers';

const URL = 'https://fakestoreapi.com/products';

const receiveProducts = (payload) => ({ type: RECEIVE_PRODUCTS, payload });
const receiveProductsError = (payload) => ({ type: PRODUCT_ERROR, payload });

export const getProducts = () => async (dispatch) => {
  const response = await axios.get(URL);
  if (response.status.toString().match(/2\d\d/)) {
    const payload = formatResponseData(response.data);
    return dispatch(receiveProducts(payload));
  }

  return dispatch(receiveProductsError(['Something went wrong while fetching products...']));
};