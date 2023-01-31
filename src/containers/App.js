import { connect } from 'react-redux';
import { getCategories, getCustomers, getProducts } from '../actions';
import App from '../components/App';

const mSTP = (state, props) => ({});

const mDTP = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getCategories: () => dispatch(getCategories()),
  getCustomers: () => dispatch(getCustomers()),
});

export default connect(mSTP, mDTP)(App);