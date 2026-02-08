import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>My Music Project</h1>
      
      {/* <Link to="/organ">
        <button style={{ margin: "10px", padding: "10px 20px" }}>
          נגן אורגנית
        </button> */}
        <Link to="/keyboard">
        <button style={{ margin: "10px", padding: "10px 20px" }}>
           אורגנית
        </button>
      </Link>
    </div>
  );
}

export default Home;
