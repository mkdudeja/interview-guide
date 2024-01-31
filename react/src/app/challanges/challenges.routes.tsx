import { Navigate } from "react-router-dom";
import PageTree from "./01_page-tree/page-tree.component";
import FormikNested from "./02_formik-nested/formik-nested.component";
import UseEffectOnce from "./03_use_effect_once/use-effect-once.component";
import Challenges from "./challanges.component";

// eslint-disable-next-line react-refresh/only-export-components
export const ChallengesPaths = [
  {
    path: "page-tree",
    element: <PageTree />,
  },
  {
    path: "formik-nested",
    element: <FormikNested />,
  },
  {
    path: "use-once",
    element: <UseEffectOnce />,
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
