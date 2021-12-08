import React from 'react';

const SearchBar = (props) => {
  const { searchGiphy } = props;
  const handleChange = (event) =>
    searchGiphy(event.currentTarget);
  return (
    <div>
      <input type="text" className="form-search form-control" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
