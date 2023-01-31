import * as lscache from 'lscache';
import { DEFAULT_STATE } from '../constants';

export const loadState = () => {
  try {
    lscache.flushExpired();
    const serializedState = lscache.get('state');
    if (!serializedState) return DEFAULT_STATE;

    return JSON.parse(serializedState);
  } catch {
    const state = DEFAULT_STATE;
    state.errors.dashboards = ['Could not retrieve your dashboards...'];
    return state;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    lscache.set('state', serializedState, 10);
    return 'Your work has been saved...';
  } catch {
    return 'Could not save your work...';
  }
};