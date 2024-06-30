import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  useRouteError,
} from "react-router-dom";

import { Film } from "pages/film";
import { Films } from "pages/films";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/films" />,
    ErrorBoundary,
  },
  {
    path: "films",
    element: <Films />,
    ErrorBoundary,
  },
  {
    path: "films/:id",
    element: <Film />,
    ErrorBoundary,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
