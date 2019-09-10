import React from 'react';
import './SearchList.css';
import SearchCard from './SearchCard';

const SearchList = ({ searchResults }) => {
  const results = Object.keys(searchResults).map(function (i) {
    return searchResults[i];
  });
  /*const results = Object.keys(searchResults).map(result => {
    return <SearchCard key={result.id} result={result} />;
  }); */
  return <div className="search-list">
  {results}
  </div>;
};

export default SearchList;
