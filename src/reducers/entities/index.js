import { combineReducers } from 'redux';
import categories from './categories';
import customers from './customers';
import dashboards from './dashboards';
import products from './products';

export default combineReducers({
  categories,
  customers,
  dashboards,
  products,
});