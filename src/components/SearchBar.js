function SearchBar() {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for restaurants..."
        style={styles.input}
      />
      <button style={styles.button}>Search</button>
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