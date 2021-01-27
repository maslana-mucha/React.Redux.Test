import React from 'react';
import styles from './LeftSidebar.scss';

import LeftSidebarHeader from './LeftSidebarHeader';

const leftSidebar = () => {
  return (
    <nav className={styles.leftSidebar}>
      <LeftSidebarHeader />
    </nav>
  );
};

export default leftSidebar;
