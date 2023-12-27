import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const product = await axios.get(
    `http://localhost:4001/products/${params.productId}`
  );
  return product.data;
}

function ViewProductPage() {
  const { data: productData } = useLoaderData();
  console.log(productData);
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{productData.name}</h2>
        <p>{productData.price} THB</p>
        <p>{productData.description}</p>
      </div>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewProductPage;
