import { cloneDeep } from 'lodash';
import { RECEIVE_DASHBOARD, REMOVE_DASHBOARD } from '../../../constants';

const customersReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case RECEIVE_DASHBOARD: {
      const { payload: dashboard } = action;
      const nextState = cloneDeep(state);
      nextState[dashboard.id] = dashboard;
      return nextState;
    }
    case REMOVE_DASHBOARD: {
      const { payload: dashboard } = action;
      const nextState = cloneDeep(state);
      delete[dashboard.id];
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default customersReducer;