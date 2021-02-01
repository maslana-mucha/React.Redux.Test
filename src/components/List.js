import React, { useState, useEffect } from 'react';
import styles from './List.scss';
import axios from 'axios';

// import Therapist from './Therapist';
// import Pagination from '@material-ui/lab/Pagination';

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

  //   const fetchTherapists = async () => {
  //     setLoading(true);
  //     const res = await axios.post(
  //       'https://twojpsycholog.pl/lb-proxy/api-market/open/therapists'
  //     );
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchTherapists();
  // }, []);

  // componentDidMount() {
  //   fetch('https://twojpsycholog.pl/lb-proxy/api-market/open/therapists', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ citySeoName: 'ONLINE' }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       const therapists = result.therapists;

  //       this.setState({
  //         therapists,
  //       });
  //     })
  //     .catch((err) => console.log(`błąd ${err}`));
  // }

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
      {/* <div className={styles.pagination_wrapper}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div> */}
    </div>
  );
};

export default List;
