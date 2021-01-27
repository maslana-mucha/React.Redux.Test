import React from 'react';
import styles from './List.scss';

const list = () => {
  return (
    <table className={styles.therapistsList}>
      <thead>
        <tr>
          <th></th>
          <th>Specjalista</th>
          <th>Specjalizacje</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tableRow}>
          <td className={styles.avatar}>
            <img src="https://i.postimg.cc/MHQLszFm/manager.jpg" alt="avatar" />
          </td>
          <td>Chorązy Jan</td>
          <td className={styles.borderVisible}>Psycholog, Psychoterapeuta</td>
        </tr>
      </tbody>
    </table>
  );
};

export default list;
