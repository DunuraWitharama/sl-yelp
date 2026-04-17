import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Business() {
  const { name } = useParams();
  const locationData = useLocation();
  const business = locationData.state;

  // ⭐ Review states
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  // ⭐ Add review function
  const handleAddReview = () => {
    if (!comment || rating < 1 || rating > 5); {
  alert("Enter valid rating (1-5)");
  return;
}

    const newReview = {
      comment,
      rating,
    };

    setReviews([...reviews, newReview]);

    setComment("");
    setRating("");
  };

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        {/* Business Info */}
        <h2>{business?.name || name}</h2>
        <p>⭐ {business?.rating || "N/A"}</p>
        <p>{business?.location || "Unknown"}</p>

        {business?.image && (
          <img
            src={business.image}
            alt=""
            style={{ width: "200px", marginBottom: "10px" }}
          />
        )}

        {/* ⭐ Add Review Section */}
        <h3>Add Review</h3>

        <input
  type="text"
  placeholder="Write your review..."
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  style={{
    padding: "10px",
    width: "300px",
    margin: "10px 0",
    borderRadius: "10px",
  }}
/>

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleAddReview} style={styles.button}>
          Submit
        </button>

        {/* ⭐ Display Reviews */}
        <h3>Reviews</h3>

        {reviews.length === 0 ? (
          <p>No reviews yet...</p>
        ) : (
          reviews.map((r, index) => (
            <div key={index} style={styles.review}>
              <p>⭐ {r.rating}</p>
              <p>{r.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  input: {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "300px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ff3b3b",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  review: {
    border: "1px solid #ccc",
    padding: "10px",
    marginTop: "10px",
  },
};

export default Business;