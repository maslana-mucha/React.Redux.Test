import React from 'react';
import './List.scss';

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
    return (
      <div>
        <table className="list-table">
          <thead className="list-table__head">
            <tr>
              <th></th>
              <th>Specjalista</th>
              <th>Specjalizacje</th>
            </tr>
          </thead>
          <tbody className="list-table__body">
            {this.state.therapists.map((therapist) => (
              <Therapist key={therapist.therapistId} {...therapist} />
            ))}
          </tbody>
        </table>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    );
  }
}

export default List;
