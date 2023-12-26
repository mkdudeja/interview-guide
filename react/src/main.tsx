import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app/app.component.tsx";
import ChallangesRoutes from "./app/challenges/challenges.routes.tsx";
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
      ChallangesRoutes,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
