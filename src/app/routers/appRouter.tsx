import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { Film } from "pages/film";
import { Films } from "pages/films";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/films" />,
  },
  {
    path: "films",
    element: <Films />,
  },
  {
    path: "films/:id",
    element: <Film />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
