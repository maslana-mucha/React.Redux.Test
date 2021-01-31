import React from 'react';
import './Therapist.scss';

const therapist = (props) => {
  return (
    <tr>
      <td>
        <div className="therapist-avatar">
          <img src={props.avatarUrl} alt="avatar" />
        </div>
      </td>
      <td>{props.fullName}</td>
      <td>{props.specializations}</td>
    </tr>
  );
};

export default therapist;
