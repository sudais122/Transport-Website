
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/layout/Navbar.jsx";
import Header from "./Components/layout/Header.jsx";
import Footer from "./Components/layout/Footer.jsx";
import PackingServices from "./Pages/Services/PackingServices.jsx";
import HouseMoving from "./Pages/Services/HouseMoving.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/moving" element={<PackingServices />} />
          <Route path="/services/house-moving" element={<HouseMoving />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
