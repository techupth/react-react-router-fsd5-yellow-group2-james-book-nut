import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      const updateProducts = products.filter((item) => item.id !== id);
      setProducts(updateProducts);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        {/* ตั้งค่าคำสั่งว่าเมื่อกดปุ่มแล้วผู้ใช้งานจะถูกพาไปยังหน้าเว็บไซต์ Create Product Page */}
        <button
          onClick={() => {
            navigate("/product/create");
          }}
        >
          Create Product
        </button>
      </div>

      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button className="view-button">View</button>
                  <button className="edit-button">Edit</button>
                </div>
              </div>

              {/* ตั้งค่าปุ่ม Delete */}
              <button
                className="delete-button"
                onClick={() => handleDelete(product.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>

      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
