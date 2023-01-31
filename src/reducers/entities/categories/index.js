import { RECEIVE_CATEGORIES } from '../../../constants';

const categoriesReducer = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case RECEIVE_CATEGORIES: {
      const { payload } = action;
      return [...state, ...payload];
    }
    default: {
      return state;
    }
  }
};

export default categoriesReducer;