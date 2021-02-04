import React, { useState, useEffect } from 'react';
import styles from './List.scss';

import Therapist from './Therapist';
import Pagination from '@material-ui/lab/Pagination';

const List = () => {
  const [therapists, setTherapists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [therapistsPerPage] = useState(11);

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
    })();
  }, []);

  const indexOfLastTherapist = currentPage * therapistsPerPage;
  const indexOfFirstTherapist = indexOfLastTherapist - therapistsPerPage;
  const currentTherapists = therapists.slice(
    indexOfFirstTherapist,
    indexOfLastTherapist
  );

  const handleChangePage = (e) => {
    const pageNumber = e.target.textContent;

    const aria = e.target.getAttribute('aria-label');
    console.log(aria);

    if (typeof parseInt(pageNumber) === 'number') {
      setCurrentPage(pageNumber);
    } else {
      if (aria === 'Go to the next page') {
        const nextPageNumber = currentPage + 1;
        setCurrentPage(nextPageNumber);
      } else {
        const prevPageNumber = currentPage - 1;
        setCurrentPage(prevPageNumber);
      }
    }
  };

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
          {currentTherapists.map((therapist) => (
            <Therapist key={therapist.therapistId} {...therapist} />
          ))}
        </tbody>
      </table>
      <Pagination
        count={Math.ceil(therapists.length / therapistsPerPage)}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePage}
      />
    </div>
  );
};

export default List;
