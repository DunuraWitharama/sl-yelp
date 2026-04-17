import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BusinessCard from "../components/BusinessCard";

function Home() {
  const [searchText, setSearchText] = useState("");

  const businesses = [
  { name: "Pizza Hut Kurunegala", rating: 4.2, location: "Kurunegala", image: "https://images.unsplash.com/photo-1601924582975-7e6c4c8c63a2" },
  { name: "KFC Kurunegala", rating: 4.0, location: "Kurunegala", image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92" },
  { name: "Burger King Kandy", rating: 4.3, location: "Kandy", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Cafe 24 Colombo", rating: 4.5, location: "Colombo", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "The Coffee Bean Colombo", rating: 4.6, location: "Colombo", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },

  { name: "Perera & Sons Colombo", rating: 4.1, location: "Colombo", image: "https://images.unsplash.com/photo-1555992336-03a23c9f1e8a" },
  { name: "Barista Colombo", rating: 4.4, location: "Colombo", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
  { name: "The Manhattan Fish Market", rating: 4.3, location: "Colombo", image: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
  { name: "Domino’s Pizza Colombo", rating: 4.2, location: "Colombo", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65" },
  { name: "Subway Colombo", rating: 4.1, location: "Colombo", image: "https://images.unsplash.com/photo-1550547660-4d3b9a9a1d3b" },

  { name: "Cafe 99 Kandy", rating: 4.5, location: "Kandy", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "Licensed to Grill Kandy", rating: 4.6, location: "Kandy", image: "https://images.unsplash.com/photo-1555992336-03a23c9f1e8a" },
  { name: "Buono Kandy", rating: 4.4, location: "Kandy", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
  { name: "Natural Coffee Kandy", rating: 4.3, location: "Kandy", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096" },

  { name: "The Lounge Galle", rating: 4.5, location: "Galle", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Indian Hut Galle", rating: 4.3, location: "Galle", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { name: "Fort Cafe Galle", rating: 4.6, location: "Galle", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },

  { name: "Cafe 88 Kurunegala", rating: 4.4, location: "Kurunegala", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "The Food Lab Kurunegala", rating: 4.5, location: "Kurunegala", image: "https://images.unsplash.com/photo-1555992336-03a23c9f1e8a" },
  { name: "Street Burger Kurunegala", rating: 4.2, location: "Kurunegala", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },

  { name: "Cafe Chill Ella", rating: 4.7, location: "Ella", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { name: "Matey Hut Ella", rating: 4.6, location: "Ella", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },

  { name: "Shanmugas Jaffna", rating: 4.5, location: "Jaffna", image: "https://images.unsplash.com/photo-1555992336-03a23c9f1e8a" },
  { name: "Mangos Jaffna", rating: 4.4, location: "Jaffna", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },

  { name: "Amba Sevana Anuradhapura", rating: 4.3, location: "Anuradhapura", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { name: "Seedevi Family Restaurant", rating: 4.2, location: "Anuradhapura", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },

  { name: "Sunset Cafe Negombo", rating: 4.5, location: "Negombo", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "Leonardo by Bella Vita", rating: 4.6, location: "Negombo", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },

  { name: "Cafe Aroma Matara", rating: 4.4, location: "Matara", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
  { name: "Ocean View Restaurant", rating: 4.5, location: "Matara", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};

export default Home;