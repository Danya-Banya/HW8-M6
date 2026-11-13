import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilmsPage } from "../pages/FilmsPage";
import { FilmDetailPage } from "../pages/FilmDetailPage";
import { Layout } from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FilmsPage />,
      },
      {
        path: "films/:id",
        element: <FilmDetailPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
