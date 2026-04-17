import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search restaurants, cafes..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0",
  },
  input: {
    width: "400px",
    padding: "12px 15px",
    borderRadius: "25px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
};

export default SearchBar;