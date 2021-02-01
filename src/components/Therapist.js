import React from 'react';
import styles from './Therapist.scss';

const Therapist = (props) => {
  const specArr = props.specializations;
  const specString = specArr.join(', ');

  return (
    <tr>
      <td>
        <div className={styles.therapist_avatar_wrapper}>
          <img src={props.avatarUrl} alt="avatar" />
        </div>
        <span>{props.fullName}</span>
      </td>
      <td>
        {specArr.length > 3 ? (
          <span className={styles.therapist_spec_wrapper}>
            {`${specArr.slice(0, 3).join(', ')}...`}
            <div>{specString}</div>
          </span>
        ) : (
          <span className={styles.therapist_spec_wrapper}>{specString}</span>
        )}
      </td>
    </tr>
  );
};

export default Therapist;
