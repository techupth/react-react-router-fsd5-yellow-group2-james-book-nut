import EditProductForm from "../components/EditProductForm";

// step 1) import useNavigate from "react-router-dom"
import { useNavigate } from "react-router-dom";

function EditProductPage() {
  // step 2) declare navigate variable เพื่อใช้กับปุ่ม "Back to Home"
  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit Product Page</h1>

      <EditProductForm />

      {/* step 3) ตั้งค่าปุ่มกดให้กดแล้วกลับไปที่หน้าจอ Home ("/") */}
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

export default EditProductPage;
