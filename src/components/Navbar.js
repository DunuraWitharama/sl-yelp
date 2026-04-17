function Navbar() {
  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>SL Rating 🇱🇰</h2>
    </div>
  );
}

const styles = {
  nav: {
    padding: "15px 30px",
    backgroundColor: "#ff3b3b",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "22px",
  },
};

export default Navbar;