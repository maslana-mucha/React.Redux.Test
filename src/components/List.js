import React from 'react';
import styles from './List.scss';

import Therapist from './Therapist';

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
    return (
      <table className={styles.therapistsList}>
        <thead>
          <tr>
            <th className={styles.empty}></th>
            <th>Specjalista</th>
            <th>Specjalizacje</th>
          </tr>
        </thead>
        <tbody>
          {this.state.therapists.map((therapist) => (
            <Therapist key={therapist.therapistId} {...therapist} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default List;
