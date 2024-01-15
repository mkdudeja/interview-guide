import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app/app.component.tsx";
import ChallangesRoutes from "./app/challanges/challenges.routes.tsx";
import ChallengesRoutes from "./app/concepts/concepts.routes.tsx";
import Playground from "./app/playground/playground.component.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="m-3">
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "playground",
        element: <Playground />,
      },
      ChallangesRoutes,
      ChallengesRoutes,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
