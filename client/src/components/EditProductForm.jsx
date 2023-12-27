import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function EditProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPricec] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const nevigate = useNavigate();
  const editPost = async () => {
    await axios.put("http://localhost:4001/products/" + params.productId, {
      name,
      image,
      price,
      description,
    });
    // nevigate("/");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editPost();
    nevigate("/");
  };
  useEffect(() => {
    editPost();
  }, []);
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
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
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
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
            onChange={(e) => {
              setPricec(e.target.value);
            }}
            value={price}
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
