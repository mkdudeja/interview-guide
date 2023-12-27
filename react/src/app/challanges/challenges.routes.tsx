import { Navigate } from "react-router-dom";
import Challenges from "./challanges.component";
import PageTree from "./page-tree/page-tree.component";

// eslint-disable-next-line react-refresh/only-export-components
export const ChallengesPaths = [
  {
    path: "page-tree",
    element: <PageTree />,
  },
];

const ChallengesRoutes = {
  path: "challenge",
  element: <Challenges />,
  children: [
    {
      index: true,
      element: <Navigate to="/" replace />,
    },
    ...ChallengesPaths,
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
};

export default ChallengesRoutes;
