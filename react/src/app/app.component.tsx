import React from "react";
import { Link } from "react-router-dom";
import { ChallengesPaths } from "./challanges/challenges.routes";

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {ChallengesPaths.map((challange, index) => (
        <Link key={challange.path} to={`/challenge/${challange.path}`}>
          {index + 1}. {challange.path}
        </Link>
      ))}
    </div>
  );
};

export default App;
