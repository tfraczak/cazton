import { RECEIVE_CUSTOMERS } from '../../../constants';

const customersReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case RECEIVE_CUSTOMERS: {
      const { payload } = action;
      return { ...state, ...payload }
    }
    default: {
      return state;
    }
  }
};

export default customersReducer;