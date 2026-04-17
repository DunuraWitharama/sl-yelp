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
      <img src={image} alt={name} style={styles.image} />

      <div style={styles.content}>
        <h3>{name}</h3>
        <p style={styles.rating}>⭐ {rating}</p>
        <p style={styles.location}>{location}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  rating: {
    color: "#ff3b3b",
    fontWeight: "bold",
  },
  location: {
    color: "gray",
  },
};

export default BusinessCard;