import { Navigate } from "react-router-dom";
import PageTree from "./01_page-tree/page-tree.component";
import Challenges from "./challenges.component";

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
