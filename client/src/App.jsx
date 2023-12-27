import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/product/view/:productId"
            element={<ViewProductPage />}
          />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/edit/:productId" element={<EditProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
