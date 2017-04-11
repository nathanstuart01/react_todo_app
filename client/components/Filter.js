import React from 'react';
import FilterLink from './FilterLink';

const Filter = ({ filter, setFilter }) => (
  <div>
    <FilterLink filter={filter} setFilter={setFilter}>All</FilterLink>
    {' '}
    <FilterLink filter={filter} setFilter={setFilter}>Active</FilterLink>
    {' '}
    <FilterLink filter={filter} setFilter={setFilter}>Complete</FilterLink>
  </div>
)

export default Filter;
