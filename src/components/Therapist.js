import React from 'react';
import styles from './Therapist.scss';

const therapist = (props) => {
  const specializationsArr = props.specializations;
  const specializationsVisible = specializationsArr.slice(0, 3).join(', ');
  const string = specializationsVisible.toString();
  console.log(string);

  return (
    <tr>
      <td className={styles.therapist_avatar_column}>
        <div className={styles.therapist_avatar_wrapper}>
          <img src={props.avatar} alt="avatar" />
        </div>
        <span>{props.name}</span>
      </td>
      <td className={styles.therapist_spec_column}>
        <span>{string}</span>
      </td>
    </tr>
  );
};

export default therapist;
