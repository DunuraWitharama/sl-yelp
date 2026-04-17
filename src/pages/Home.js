import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BusinessCard from "../components/BusinessCard";

function Home() {
  const businesses = [
    {
      name: "Pizza Hut",
      rating: 4.2,
      location: "Colombo",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "KFC",
      rating: 4.0,
      location: "Kandy",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Burger King",
      rating: 4.3,
      location: "Galle",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div>
      <Navbar />
      <SearchBar />

      <div style={styles.grid}>
        {businesses.map((b, index) => (
          <BusinessCard
            key={index}
            name={b.name}
            rating={b.rating}
            location={b.location}
            image={b.image}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Home;