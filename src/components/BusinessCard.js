function BusinessCard({ name, rating, location, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p>⭐ {rating}</p>
      <p>{location}</p>
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