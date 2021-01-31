import React from 'react';
import styles from './Therapist.scss';

const therapist = (props) => {
  return (
    <tr>
      <td className={styles.therapist_avatar_column}>
        <div className={styles.therapist_avatar_wrapper}>
          <img src={props.avatarUrl} alt="avatar" />
        </div>
        <span>{props.fullName}</span>
      </td>
      <td className={styles.therapist_spec_column}>{props.specializations}</td>
    </tr>
  );
};

export default therapist;
