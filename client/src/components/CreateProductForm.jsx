import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  // step 1)
  // ในหน้ามี Input อยู่ 4 ตัว จึงต้อง declare variable ออกมา 8 ตัว
  // ใช้ useState เพื่อเก็บข้อมูลที่กรอกไว้ และไว้ส่งไปให้ Server
  const [nameInput, setName] = useState("");
  const [imageInput, setImage] = useState("");
  const [priceInput, setPrice] = useState(0);
  const [descriptionInput, setDescription] = useState("");

  // step 2)
  // declare variable ที่ชื่อ navigate เพื่อเตรียมใช้ในการเปลี่ยนหน้าของเพจไปที่ต่าง ๆ
  const navigate = useNavigate();

  // variable ที่เอาไว้ควบคุมเมื่อ Submit
  // ใส่ event.preventDefault() ไปด้วย เพื่อไม่ให้หน้าจอ Refresh
  const handleSubmit = (event) => {
    event.preventDefault();
    // createProduct เป็น callback function?
    createProduct();
  };

  const createProduct = async () => {
    try {
      const newProductData = {
        name: nameInput,
        price: priceInput,
        image: imageInput,
        description: descriptionInput,
      };
      await axios.post("http://localhost:4001/products", newProductData);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          {/* ตั้งค่าเมื่อผู้ใช้ input ข้อมูล */}
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setName(event.target.value);
              value = { nameInput };
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          {/* ตั้งค่าเมื่อผู้ใช้ input ข้อมูล */}
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImage(event.target.value);
              value = { imageInput };
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          {/* ตั้งค่าเมื่อผู้ใช้ input ข้อมูล */}
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPrice(event.target.value);
              value = { priceInput };
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          {/* ตั้งค่าเมื่อผู้ใช้ input ข้อมูล */}
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescription(event.target.value);
              value = { descriptionInput };
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
