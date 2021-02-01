import React, { useState, useEffect } from 'react';
import styles from './List.scss';

import Therapist from './Therapist';

const List = () => {
  const [therapists, setTherapists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [therapistsPerPage, setTherapistsPerPage] = useState(11);

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        'https://twojpsycholog.pl/lb-proxy/api-market/open/therapists',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ citySeoName: 'ONLINE' }),
        }
      );

      const content = await rawResponse.json();
      setTherapists(content.therapists);

      console.log(content.therapists);
    })();
  }, []);

  return (
    <div>
      <table className={styles.list_table}>
        <thead className={styles.list_table__head}>
          <tr>
            <th>Specjalista</th>
            <th>Specjalizacje</th>
          </tr>
        </thead>
        <tbody className={styles.list_table__body}>
          {short.map((therapist) => (
            <Therapist key={therapist.therapistId} {...therapist} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
