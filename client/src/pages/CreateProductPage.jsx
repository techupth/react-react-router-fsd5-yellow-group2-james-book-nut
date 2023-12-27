import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";
function CreateProductPage() {
  const nevigate = useNavigate();
  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
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

export default CreateProductPage;
