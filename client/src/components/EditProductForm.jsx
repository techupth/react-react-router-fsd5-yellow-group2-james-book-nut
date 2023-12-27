import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProductForm({ data }) {
  const [productData, setProductData] = useState(data);
  const navigate = useNavigate();
  function handleChange(event) {
    const { name: field, value } = event.target;
    setProductData((prevProductData) => {
      return {
        ...prevProductData,
        [field]: value,
      };
    });
  }

  async function submitChange(event) {
    event.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:4001/products/${productData.id}`,
        productData
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="product-form">
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={productData.image}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={productData.price}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={productData.description}
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={submitChange}>
          Update
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
