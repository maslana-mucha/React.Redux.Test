import React from 'react';
import styles from './UpperMenuBar.scss';

import UpperMenuBarTitle from './UpperMenuBarTitle';

const upperMenuBar = () => {
  return (
    <nav className={styles.upperMenuBar}>
      <UpperMenuBarTitle />
    </nav>
  );
};

export default upperMenuBar;
