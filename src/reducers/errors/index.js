import {
  CATEGORY_ERROR,
  CUSTOMER_ERROR,
  PRODUCT_ERROR,
} from '../../constants';

const errorsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ERROR: return { ...state, categories: payload };
    case CUSTOMER_ERROR: return { ...state, customers: payload };
    case PRODUCT_ERROR: return { ...state, products: payload };
    default: return state;
  }
};

export default errorsReducer;