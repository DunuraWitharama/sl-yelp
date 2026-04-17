import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BusinessCard from "../components/BusinessCard";

function Home() {
  const [searchText, setSearchText] = useState("");

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

  // 🔥 Filter logic
  const filteredBusinesses = businesses.filter((b) =>
    b.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={setSearchText} />

      <div style={styles.grid}>
        {filteredBusinesses.map((b, index) => (
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