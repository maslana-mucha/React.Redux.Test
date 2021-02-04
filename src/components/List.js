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
    const nextPageButton = e.target.getAttribute('d');
    console.log(nextPageButton);

    if (typeof parseInt(pageNumber) === 'number') {
      setCurrentPage(pageNumber);
    } else {
      // if (nextPageButton) {
      //   const nextPageNumber = currentPage + 1;
      //   setCurrentPage(nextPageNumber);
      // } else {
      //   const prevPageNumber = currentPage - 1;
      //   setCurrentPage(prevPageNumber);
      // }
    }
  };

  return (
    <div className={styles.flex_container}>
      {/* <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
        <TableFooter>
          <TableRow>
            <Pagination></Pagination>
          </TableRow>
        </TableFooter>
      </Table> */}

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
