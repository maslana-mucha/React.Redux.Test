import React from 'react';
import styles from './Pagination.scss';

const Pagination = ({ therapistsPerPage, totalTherapists, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTherapists / therapistsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <ul className={styles.pagination__list}>
        {pageNumbers.map((number) => (
          <li key={number} id={number}>
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={styles.pagination__list_link}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
