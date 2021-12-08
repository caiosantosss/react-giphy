import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { searchGiphy } = props;
    searchGiphy(event.currentTarget.value);
  };
  return (
    <div>
      <input type="text" className="form-search form-control" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
