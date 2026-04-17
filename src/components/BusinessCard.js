import { useNavigate } from "react-router-dom";

function BusinessCard({ name, rating, location, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/business/${name}`, {
  state: { name, rating, location, image },
});
  };

  return (
    <div style={styles.card} onClick={handleClick}>
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
    cursor: "pointer",
  },
};

export default BusinessCard;