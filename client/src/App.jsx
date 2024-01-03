import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProductPage, {
  loader as productLoader,
} from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/view/:productId",
    element: <ViewProductPage />,
    loader: productLoader,
  },
  {
    path: "/product/create",
    element: <CreateProductPage />,
  },
  {
    path: "/product/edit/:productId",
    element: <EditProductPage />,
    loader: productLoader,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
