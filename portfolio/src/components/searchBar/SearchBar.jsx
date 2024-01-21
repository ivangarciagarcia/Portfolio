import './searchBar.css'
import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <form className='search-bar'>
      <input
        type="text"
        placeholder="Buscar proyectos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </form>
  );
};


