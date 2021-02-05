import React from 'react';
import styles from './Therapist.scss';

const Therapist = (props) => {
  const specArr = props.specializations;
  const specString = specArr.join(', ');

  return (
    <tr>
      <td>
        <div className={styles.therapist_avatar_wrapper}>
          <img
            src={
              props.avatarUrl
                ? props.avatarUrl
                : 'https://i.postimg.cc/bJ5M9G3w/iconfinder-batman-hero-avatar-comics-4043232.png'
            }
            alt="avatar"
          />
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
