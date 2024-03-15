import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import Layout from "../componets/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  },
]);
