import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
