import React from 'react';
import styles from './List.scss';

import Therapist from './Therapist';
import Pagination from '@material-ui/lab/Pagination';

class List extends React.Component {
  state = {
    therapists: [],
  };

  componentDidMount() {
    fetch('https://twojpsycholog.pl/lb-proxy/api-market/open/therapists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ citySeoName: 'ONLINE' }),
    })
      .then((response) => response.json())
      .then((result) => {
        const therapists = result.therapists;

        this.setState({
          therapists,
        });
      })
      .catch((err) => console.log(`błąd ${err}`));
  }

  render() {
    const therArr = this.state.therapists;
    const short = therArr.splice(0, 11);

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
        <div className={styles.pagination_wrapper}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    );
  }
}

export default List;
