import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function ViewProductPage() {
  const nevigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({});

  const productHomePage = async () => {
    const product = await axios.get(
      `http://localhost:4001/products/` + params.productId
    );
    setProduct(product.data.data);
  };

  console.log(product);

  useEffect(() => {
    productHomePage();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>

        <p>{product.description}</p>
      </div>
      <button
        onClick={() => {
          nevigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
