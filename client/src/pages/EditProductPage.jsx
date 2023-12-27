import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";
function EditProductPage() {
  const nevigate = useNavigate();
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
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

export default EditProductPage;
