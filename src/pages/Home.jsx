import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Waste Management App</h1>
      <Link to="/schedule">View Waste Collection Schedule</Link>
      <br />
      <Link to="/centers">Find Recycling Centers</Link>
    </div>
  );
};

export default Home;
