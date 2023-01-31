export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';
export const REMOVE_DASHBOARD = 'REMOVE_DASHBOARD';

export const PRODUCT_ERROR = 'PRODUCT_ERROR';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';
export const CUSTOMER_ERROR = 'CUSTOMER_ERROR';
export const REMOVE_PRODUCT_ERRORS = 'REMOVE_PRODUCT_ERRORS';
export const REMOVE_CATEGORY_ERRORS = 'REMOVE_CATEGORY_ERRORS';
export const REMOVE_CUSTOMER_ERRORS = 'REMOVE_CUSTOMER_ERRORS';

export const SET_IS_LOADING = 'SET_IS_LOADING';

export const DEFAULT_STATE = {
  entities: {
    categories: [],
    customers: {},
    dashboards: {},
    products: {},
  },
  errors: {
    categories: [],
    customers: [],
    dashboards: [],
    products: [],
  },
  ui: {
    categories: {
      isLoading: false,
    },
    customers: {
      isLoading: false,
    },
    dashboards: {
      isLoading: false,
    },
    products: {
      isLoading: false,
    },
  },
};
