import React from 'react';

import List from './List';
import ListPageNumbers from './ListPageNumbers';

const listContainer = () => {
  return (
    <div>
      <List />
      <ListPageNumbers />
    </div>
  );
};

export default listContainer;
