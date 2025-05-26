import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";


import BrainDataNetwork from "./BrainDataNetwork"; // import the new background

// Icons omitted here for brevity...

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      {/* Neural brain data network background */}
      <BrainDataNetwork />

      {/* Main content above */}
      <div style={{ position: "relative", zIndex: 10, color: "#e0e7ff" }}>
        <Navbar />

        {/* Hero and other sections remain unchanged */}
        {/* ... your existing hero, features, services, industries ... */}
      </div>
    </div>
  );
};

export default Home;
