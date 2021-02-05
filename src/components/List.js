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

  const handleChangePage = (e, currentPage) => {
    let pageNumber = currentPage;
    const pageButtonLabel = e.target.getAttribute('aria-label');

    if (pageButtonLabel !== null) {
      pageNumber = e.target.textContent;
      setCurrentPage(pageNumber);
    } else {
      const arrowButtonLabel = e.target.parentNode.getAttribute('aria-label');
      if (arrowButtonLabel.indexOf('next') != -1) {
        setCurrentPage((pageNumber += 1));
      } else {
        setCurrentPage((pageNumber -= 1));
      }
    }
  };

  return (
    <div className={styles.flex_container}>
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
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(therapists.length / therapistsPerPage)}
          variant="outlined"
          shape="rounded"
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default List;
