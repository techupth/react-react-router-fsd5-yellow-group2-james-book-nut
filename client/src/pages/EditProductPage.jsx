import EditProductForm from "../components/EditProductForm";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

function EditProductPage() {
  const { data: productData } = useLoaderData();
  console.log(productData);
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm data={productData} />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default EditProductPage;
