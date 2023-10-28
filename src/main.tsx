import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Dashboard from "./admin/home/dashboard";
import Setup from "./admin/home/setup";
import ErrorPage from "./admin/home/error";
import Device from "./admin/home/device";
import Editdevice from "./admin/components/editdevice";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'MONITOR',
        element: <Dashboard />
      },
      {
        path: 'SETUP',
        element: <Setup />
      },
      {
        path: 'DEVICE',
        element: <Device />
      },
      {
        path: 'MONITOR/Editdevice/:id',
        element: <Editdevice />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);