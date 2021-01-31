import React from 'react';
import styles from './App.scss';
import List from './List';

const App = () => {
  return (
    <div className={styles.app}>
      <nav className={styles.app_nav_left}>
        <div className={styles.app_nav_left__logo}>
          <span>TP</span>
        </div>
      </nav>
      <nav className={styles.app_nav_upper}>
        <div className={styles.app_nav_upper__title}>Lista specjalistów</div>
      </nav>
      <div className={styles.app_list_container}>
        <List />
      </div>
    </div>
  );
};

export default App;
