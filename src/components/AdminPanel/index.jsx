import React from 'react';
import DashboardIcon from './DashboardIcon';
import NewDashboard from './NewDashboard';
import '../../styles/AdminPanel.scss';

const AdminPanel = (props) => {
  const dashboards = props.dashboards || [];
  return (
    <ul id="dashboard-icon-list">
      <NewDashboard key="dashboard-new"/>
      {dashboards.map((dashboard) => (
        <DashboardIcon dashboard={dashboard} key={`dashboard-icon-${dashboard.id}`}/>
      ))}
    </ul>
  );
};

export default AdminPanel;
