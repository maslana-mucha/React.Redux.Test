import React from 'react';
import styles from './AppContainer.scss';

import LeftSidebar from './LeftSidebar';
import UpperMenuBar from './UpperMenuBar';
import ListSection from './ListSection';

const appContainer = () => (
  <div className={styles.appContainer}>
    <LeftSidebar />
    <UpperMenuBar />
    <ListSection />
  </div>
);

export default appContainer;
