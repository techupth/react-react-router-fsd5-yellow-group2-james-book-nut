import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />

      {/* ตั้งค่าปุ่ม Back to Home */}
      {/* ใช้ navigate เมื่อกดแล้วจะกลับไปที่หน้า Home */}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default CreateProductPage;
