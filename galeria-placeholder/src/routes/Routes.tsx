import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Galeria } from "../pages/Galeria";
import { Photo } from "../pages/Photo";

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/album/:id", element: <Galeria /> },
    { path: "/photo/:id", element: <Photo /> },
  ]);
};
