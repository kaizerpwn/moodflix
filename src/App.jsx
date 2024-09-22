import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import MovieListPage from "./pages/MovieList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies/:mood",
    element: <MovieListPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
