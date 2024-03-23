const Search = ({search, setSearch, handleSearch}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        name="search"
      ></input>
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
