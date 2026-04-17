function BusinessCard() {
  return (
    <div style={styles.card}>
      <img
  src="https://via.placeholder.com/200"
  alt="food"
  style={{ width: "100%" }}
/>
      <h3>Pizza Hut</h3>
      <p>⭐ 4.2</p>
      <p>Colombo</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    width: "200px",
  },
};

export default BusinessCard;