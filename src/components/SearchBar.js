import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for restaurants..."
        value={query}
        onChange={(e) => {
  setQuery(e.target.value);
  onSearch(e.target.value);
}}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
}

const styles = {
  container: {
    margin: "20px",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    padding: "10px",
    width: "300px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ff3b3b",
    color: "white",
    border: "none",
  },
};

export default SearchBar;