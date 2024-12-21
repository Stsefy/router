import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Wrapper from "./pages/wrapper";
import Main from "./pages/Main.jsx";
import NotFound from "./pages/NotFound.jsx";
import Users from "./pages/Users.jsx";
import User from "./pages/User.jsx";
import Albums from "./pages/Albums.jsx";
import Album from "./pages/Album.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/albums",
        element: <Albums />,
      },
      {
        path: "/users/:userId/albums",
        element: <User />,
      },
      {
        path: "/users/:userId/albums/:albumId",
        element: <Album />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
