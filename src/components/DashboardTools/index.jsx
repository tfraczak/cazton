import React from 'react';
import AddProducts from './AddProducts';

const DashboardTools = (props) => {

  return (
    <ul className="dashboard-tool-list">
      <AddProducts />
      <li className="dashboard-tool">Categories+</li>
      <li className="dashboard-tool">Customers+</li>
    </ul>
  );
};

export default DashboardTools;
