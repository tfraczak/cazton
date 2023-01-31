import React from 'react';

const splitName = (name, char) => {
  let newName = name.split(char).map((word) => {
    for (let i=0; i < word.length; i++) {
      if (word[i] !== ' ') return word[i];
    }
  }).join('').slice(0,5);
  return newName;
}

export const nameFormatter = (name) => {
  let newName = '';
  if (name) {
    if (name.includes(' ')) {
      newName = name.split(' ').map(word => word[0]).join('');
    } else if (name.includes('-')) {
      newName = splitName(name, '-');
    } else if (name.includes('/')) {
      newName = splitName(name, '/');
    } else if (name.includes('_')) {
      newName = splitName(name, '_');
    } else {
      newName = name[0];
    }
  }
  return newName;
};

const DashboardIcon = ({ dashboard }) => {
  const formattedName = nameFormatter(dashboard.name || `D${dashboard.id}`);
  return (
    <li className="dashboard-icon">
      <p className="dashboard-icon-preview">
        {formattedName}
      </p>
    </li>
  );
};

export default DashboardIcon;
