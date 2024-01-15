import React from "react";
import { Link } from "react-router-dom";
import { ChallengesPaths } from "./challanges/challenges.routes";
import { ConceptsPaths } from "./concepts/concepts.routes";

const App: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {ChallengesPaths.map((challange, index) => (
          <Link key={challange.path} to={`/challenge/${challange.path}`}>
            {index + 1}. {challange.path}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {ConceptsPaths.map((concept, index) => (
          <Link key={concept.path} to={`/concept/${concept.path}`}>
            {index + 1}. {concept.path}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;
