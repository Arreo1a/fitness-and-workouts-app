import React from "react";

import "../styles/pages/HomePage.scss";

// Components
import Navbar from "../components/Navbar";
import ExerciseCard from "../components/ExerciseCard";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />

      <div className="exercisesContainer">
        <div className="exercisesWrapper">
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
