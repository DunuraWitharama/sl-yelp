import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BusinessCard from "../components/BusinessCard";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />

      <div style={styles.grid}>
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
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