import { Navigate } from "react-router-dom";
import ReactMemo from "./01_use-memo/react-memo.component";
import UseMemo from "./01_use-memo/use-memo.component";
import Concepts from "./concepts.component";

// eslint-disable-next-line react-refresh/only-export-components
export const ConceptsPaths = [
  {
    path: "use-memo",
    element: (
      <UseMemo
        users={[
          {
            id: 11,
            name: "Manish Kumar",
          },
        ]}
        name={11}
      />
    ),
  },
  {
    path: "react-memo",
    element: <ReactMemo />,
  },
];

const ChallengesRoutes = {
  path: "concept",
  element: <Concepts />,
  children: [
    {
      index: true,
      element: <Navigate to="/" replace />,
    },
    ...ConceptsPaths,
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
};

export default ChallengesRoutes;
