import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";

function App() {
  return (
    <Router>
      <div>
        <h1>SL Rating 🇱🇰</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;