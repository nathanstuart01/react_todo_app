import React from 'react';

const FilterLink = ({ children, filter, setFilter }) => {
  if (filter === children)
    return (<span>{children}</span>)
  else
    return(<a href='#' onClick={ () => setFilter(children)}>{children}</a>)
}

export default FilterLink;
