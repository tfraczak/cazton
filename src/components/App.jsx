import React, {
  useEffect,
} from 'react';
import AdminPanel from './AdminPanel';
import DashboardTools from './DashboardTools';


const App = ({ getCategories, getCustomers, getProducts }) => {
  useEffect(() => {
    getProducts();
    getCategories();
    getCustomers();
  }, []);

  return (
    <div>
      <AdminPanel />
      <div>
        <DashboardTools />
        {/* <Dashboard /> */}
      </div>
    </div>
  );
};

export default App;
