import React from 'react';
import styles from './Therapist.scss';

const therapist = (props) => {
  return (
    <tr>
      <td>
        <div className={styles.avatar}>
          <img src={props.avatarUrl} alt="avatar" />
        </div>
      </td>
      <td>{props.fullName}</td>
      <td>{props.specializations}</td>
    </tr>
  );
};

export default therapist;
