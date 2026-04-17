import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Business() {
  const { name } = useParams();
  const locationData = useLocation();

  const business = locationData.state;

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h2>{business?.name || name}</h2>
        <p>⭐ {business?.rating || "N/A"}</p>
        <p>{business?.location || "Unknown"}</p>

        {business?.image && (
          <img src={business.image} alt="" style={{ width: "200px" }} />
        )}

        <h3>Reviews</h3>
        <p>No reviews yet...</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
};

export default Business;