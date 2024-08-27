import './SearchBar.css'
import { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="btn btn-primary" type="button">
        Search
      </button>
    </div>
  );
}

export default SearchBar;