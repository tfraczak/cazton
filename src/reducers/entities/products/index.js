import { RECEIVE_PRODUCTS } from '../../../constants';

const productsReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case RECEIVE_PRODUCTS: {
      const { payload } = action;
      return { ...state, ...payload }
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;