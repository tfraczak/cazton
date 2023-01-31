import axios from 'axios';
import {
  CATEGORY_ERROR,
  RECEIVE_CATEGORIES,
} from '../../constants';
import { formatResponseData } from '../../helpers';

const URL = 'https://fakestoreapi.com/products/categories';

const receiveCategories = (payload) => ({ type: RECEIVE_CATEGORIES, payload });
const receiveCategoriesError = (payload) => ({ type: CATEGORY_ERROR, payload });

export const getCategories = () => async (dispatch) => {
  const response = await axios.get(URL);
  if (response.status.toString().match(/2\d\d/)) {
    return dispatch(receiveCategories(response.data));
  }

  return dispatch(receiveCategoriesError(['Something went wrong while fetching categories...']));
};