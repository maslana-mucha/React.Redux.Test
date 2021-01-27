import React from 'react';
import styles from './ListSection.scss';

import ListContainer from './ListContainer';

const listSection = () => {
  return (
    <div className={styles.listSection}>
      <ListContainer />
    </div>
  );
};

export default listSection;
